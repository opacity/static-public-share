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
	r.GET("/:shortlink", getShortlink)
	r.GET("/health-check", func(c *gin.Context) {
		c.JSON(http.StatusOK, map[string]string{
			"status": "ok",
			"uptime": fmt.Sprintf("%v", time.Since(timeNow)),
		})
	})
	r.Static("/shortlink", "./public/shortlink")
	r.Static("/resources", "./public/shortlink/resources")

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

	// var imgUrl string
	// imgUrl := "https://s3.us-east-2.amazonaws.com/opacity-public/thumbnail_default.png" 
	
	// isImage = isImageFile(ps.FileExtension)
	// if isImage == true {
		imgUrl := getPublicShareThumbnailURL(ps.FileID)
	// }

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
	return os.Getenv("NODE_BUCKET_URL") + fileHandle + "/thumbnail"
}

func getPublicShareFileURL(fileHandle string) string {
	return os.Getenv("NODE_BUCKET_URL") + fileHandle + "/public"
}

// func isImageFile(ext string) bool {
// 	var a := []string{"png", "apng", "svg", "gif", "bmp", "ico", "cur", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "webp"}

//     for _, n := range a {
//         if ext == n {
//             return true
//         }
//     }
//     return false
// }
