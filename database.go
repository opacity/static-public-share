package main

import (
	_ "database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func Connect() {
	if DB != nil {
		DB.Close()
	}
	fmt.Println("Attempting connection to mysql")

	DB, _ = gorm.Open("mysql", os.Getenv("DB_CONN_STRING"))
}

func GetPublicShareByShortlink(shortlink string) (PublicShare, error) {
	publicShare := PublicShare{
		PublicID: shortlink,
	}
	err := DB.Model(&PublicShare{}).First(&publicShare).Error
	return publicShare, err
}

// PublicShare ...
type PublicShare struct {
	PublicID    string    `gorm:"primary_key;autoIncrement:false" json:"public_id" binding:"required"`
	CreatedAt   time.Time `json:"createdAt"`
	ViewsCount  int       `gorm:"not null" json:"views_count"`
	Title       string    `gorm:"not null;size:65535" json:"title"`
	Description string    `gorm:"not null;size:65535" json:"description"`
	FileID      string    `gorm:"UNIQUE_INDEX:idx_publicshare;not null" json:"file_id" binding:"required,len=64" minLength:"64" maxLength:"64"`
}
