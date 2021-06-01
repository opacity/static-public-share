package main

import (
	"fmt"
	"net/http"
	"os"
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

	imgUrl := getPublicShareThumbnailURL(ps.FileID)
	fileUrl := getPublicShareFileURL(ps.FileID)

	err = UpdateViewsCount(ps)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.HTML(http.StatusOK, "shortlink.html", gin.H{
		"Url":           fileUrl,
		"Title":         ps.Title,
		"Description":   ps.Description,
		"MimeType":      ps.MimeType,
		"FileExtension": ps.FileExtension,
		"Image":         imgUrl,
	})
}

func getPublicShareThumbnailURL(fileHandle string) string {
	url := os.Getenv("NODE_BUCKET_URL") + fileHandle + "/thumbnail"
	resp, err := http.Head(url)

	if err == nil && resp.StatusCode == http.StatusOK {
		return url
	}
	return "https://s3.us-east-2.amazonaws.com/opacity-public/thumbnail_default.png"
}

func getPublicShareFileURL(fileHandle string) string {
	return os.Getenv("NODE_BUCKET_URL") + fileHandle + "/public"
}
