package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		fmt.Printf("error loading .env file: %s", err)
	}

	DbConnect()
}

func main() {
	timeNow := time.Now()
	r := gin.Default()

	r.LoadHTMLFiles("templates/shortlink.html")
	r.Static("/shortlink", "./public/shortlink")
	r.Static("/resources", "./public/shortlink/resources")

	r.GET("/:shortlink", getShortlink)
	r.GET("/health-check", func(c *gin.Context) {
		c.JSON(http.StatusOK, map[string]string{
			"status": "ok",
			"uptime": fmt.Sprintf("%v", time.Since(timeNow)),
		})
	})

	r.Run(":" + os.Getenv("STATIC_PUBLIC_SHARE_PORT"))
}

func getShortlink(c *gin.Context) {
	shortlink := c.Params.ByName("shortlink")
	ps, err := GetPublicShareByShortlink(shortlink)

	if err != nil {
		if err.Error() == "record not found" {
			c.AbortWithStatus(404)
			return
		}

		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
		return
	}

	downloadPublicFileData, err := getPublicFileDownloadData(ps.FileID)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
		return
	}

	err = UpdateViewsCount(ps)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.HTML(http.StatusOK, "shortlink.html", gin.H{
		"Url":           &downloadPublicFileData.FileDownloadUrl,
		"Title":         ps.Title,
		"Description":   ps.Description,
		"MimeType":      ps.MimeType,
		"FileExtension": ps.FileExtension,
		"Image":         &downloadPublicFileData.FileDownloadThumbnailUrl,
	})
}

type downloadFileDataReq struct {
	FileID string `json:"fileID" binding:"required"`
}

type downloadPublicFileData struct {
	FileDownloadUrl          string `json:"fileDownloadUrl" example:"a URL to use to download the public file"`
	FileDownloadThumbnailUrl string `json:"fileDownloadThumbnailUrl" example:"a URL to use to download the public file thumbnail"`
}

func getPublicFileDownloadData(fileID string) (downloadPublicFileData *downloadPublicFileData, err error) {
	url := strings.TrimSuffix("/", os.Getenv("STORAGE_NODE_URL")) + "/api/v2/download/public"

	reqBody, err := json.Marshal(downloadFileDataReq{
		FileID: fileID,
	})
	if err != nil {
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(reqBody))
	if err != nil {
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return
	}

	err = json.Unmarshal(body, downloadPublicFileData)

	return
}
