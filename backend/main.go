package main

import (
	"database/sql"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
    viper.SetConfigType("json")
	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalf("Couldn't reading config file %s", err)
	}

	driver := viper.GetString("db.driver")
	dsn := viper.GetString("db.dsn")
	port := viper.GetString("db.port")
	debug := viper.GetString("debug")

	if debug == "true" {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	db, err := sql.Open(driver, dsn)
	if err != nil {
		log.Println("Error occured: ", err)
	}

	defer db.Close()

	arguments(db)

	r := gin.Default()

	u := repository.NewUserRepo(db)
	handlers.NewUserHandler(r, u)
}