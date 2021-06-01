package main

import (
	_ "database/sql"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func DbConnect() {
	if DB != nil {
		DB.Close()
	}
	fmt.Println("attempting to connect to MySQL")

	db, err := gorm.Open("mysql", os.Getenv("DB_CONN_STRING"))
	DB = db
	if err != nil {
		log.Fatalf("error connecting to MySQL: %s", err)
	}
}

func GetPublicShareByShortlink(shortlink string) (PublicShare, error) {
	publicShare := PublicShare{
		PublicID: shortlink,
	}
	err := DB.Model(&PublicShare{}).First(&publicShare).Error
	return publicShare, err
}

func UpdateViewsCount(ps PublicShare) error {
	ps.ViewsCount++

	return DB.Save(&ps).Error
}

// PublicShare ...
type PublicShare struct {
	PublicID      string    `gorm:"primary_key;autoIncrement:false" json:"public_id" binding:"required"`
	CreatedAt     time.Time `json:"createdAt"`
	ViewsCount    int       `gorm:"not null" json:"views_count"`
	Title         string    `gorm:"not null;size:65535" json:"title"`
	Description   string    `gorm:"not null;size:65535" json:"description"`
	MimeType      string    `gorm:"not null;size:255" json:"mime_type"`
	FileExtension string    `gorm:"not null;size:255" json:"fileExtension"`
	FileID        string    `gorm:"UNIQUE_INDEX:idx_publicshare;not null" json:"file_id" binding:"required,len=64" minLength:"64" maxLength:"64"`
}
