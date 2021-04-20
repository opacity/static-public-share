package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("error loading .env file: %s", err)
	}

	Connect()
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
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
	}

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, err.Error())
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
