package main

import (
	"auth/database"
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := database.Connect()
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Create the table
	res, err := CreateTableUser(db)
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}

func CreateTableUser(db *sql.DB) (string, error) {
	_, err := db.Exec(`
		CREATE TABLE IF NOT EXISTS user (
			Id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
			Username varchar(255) NOT NULL,
			Email varchar(255) NOT NULL UNIQUE,
			Password varchar(255) NOT NULL,
			Jenjang varchar (255) NOT NULL,
			Kota varchat (255) NOT NULL,
			Role varchar(255) NOT NULL
	);`)
	if err != nil {
		return "Error : ", err
	}
	return "Success : Create Tables", nil
}
