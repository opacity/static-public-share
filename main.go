package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type shortlinkFileResp struct {
	URL          string `json:"url"`
	ThumbnailURL string `json:"thumbnailUrl"`
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("error loading .env file: %s", err)
	}

	Connect()
}
func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.GET("/:shortlink", getShortlink)

	r.Run(":3080")
}

func getShortlink(c *gin.Context) {
	shortlink := c.Params.ByName("shortlink")
	ps, err := GetPublicShareByShortlink(shortlink)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
	}

	shortlinkBackend, err := getShortlinkStorageNode(shortlink)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
	}

	c.HTML(http.StatusOK, "shortlink.tmpl", gin.H{
		"Url":         os.Getenv("OPACITY_URL"),
		"Title":       ps.Title,
		"Description": ps.Description,
		"Image":       shortlinkBackend.ThumbnailURL,
	})
}

func getShortlinkStorageNode(shortlink string) (shortlinkFileResp shortlinkFileResp, err error) {
	url := os.Getenv("STORAGE_NODE_URL") + "api/v2/public-share/" + shortlink
	req, err := http.Get(url)

	json.NewDecoder(req.Body).Decode(&shortlinkFileResp)
	return
}
