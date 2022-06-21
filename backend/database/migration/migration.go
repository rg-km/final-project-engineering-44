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
	res, err := CreateTableDatabse(db)
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}

func CreateTableDatabse(db *sql.DB) (string, error) {
	_, err := db.Exec(`
	CREATE TABLE IF NOT EXISTS user (
		Id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
		Username varchar(255) NOT NULL,
		Email varchar(255) NOT NULL UNIQUE,
		Password varchar(255) NOT NULL,
		Jenjang varchar (255) NOT NULL,
		Kota varchar (255) NOT NULL,
		Role varchar(255) NOT NULL
		);

	CREATE TABLE IF NOT EXISTS scholarship (
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		User_id INTEGER,
		Name VARCHAR(255) NOT NULL,
		Jenjang VARCHAR NOT NULL,
		Kota VARCHAR NOT NULL,
		Description TEXT NOT NULL,
		Image VARCHAR DEFAULT 'image.jpg',
		Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (User_id) REFERENCES user (id)
		);
	INSERT INTO scholarship (User_id, Name, Jenjang, Kota, Description, Image) VALUES (1, 'SMPN 1', 'SMP', 'Jakarta', 'SMPN 1 adalah sekolah menengah pertama di Jakarta', 'image.jpg'),
	(2, 'SMAN 1', 'SMA', 'Jakarta', 'SMPN 1 adalah sekolah menengah pertama di Jakarta', 'image.jpg');
	
	CREATE TABLE IF NOT EXISTS comments (
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		Content TEXT NOT NULL,
		User_id INTEGER NOT NULL,
		Scholarship_id INTEGER NOT NULL,
		Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (User_id) REFERENCES user (id),
		FOREIGN KEY (Scholarship_id) REFERENCES scholarship (id)
	    );
		  
		`)
	if err != nil {
		return "Error : ", err
	}
	return "Success : Create Tables", nil
}
