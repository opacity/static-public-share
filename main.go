package main

import (
	"fmt"
	"net/http"
	"os"

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
	r := gin.Default()
	r.LoadHTMLFiles("templates/shortlink.tmpl")
	r.GET("/:shortlink", getShortlink)
	r.GET("/health-check", func(c *gin.Context) {
		c.JSON(http.StatusOK, map[string]string{"status": "ok"})
	})

	r.Run(":" + os.Getenv("STATIC_PUBLIC_SHARE_PORT"))
}

func getShortlink(c *gin.Context) {
	shortlink := c.Params.ByName("shortlink")
	ps, err := GetPublicShareByShortlink(shortlink)

	if err != nil {
		status := http.StatusInternalServerError
		if err.Error() == "record not found" {
			status = http.StatusNotFound
		}

		c.AbortWithStatusJSON(status, err.Error())
		return
	}

	c.HTML(http.StatusOK, "shortlink.tmpl", gin.H{
		"Url":         os.Getenv("OPACITY_URL"),
		"Title":       ps.Title,
		"Description": ps.Description,
		"Image":       getPublicShareThumbnailURL(ps.FileID),
	})
}

func getPublicShareThumbnailURL(fileHandle string) string {
	return os.Getenv("NODE_BUCKET_URL") + fileHandle + "/thumbnail"
}
