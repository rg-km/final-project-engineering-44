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
		Image VARCHAR DEFAULT 'image.jpg',
		Role varchar(255) NOT NULL
		);
	
	INSERT INTO user (Username, Email, Password, Jenjang, Kota, Image, Role) VALUES ('admin', 'admin@gmail.com', 'admin', 'Perusahan', 'Jakarta', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQgKCw0NCAgHDQ0QBwgNCA8IDQ0NFREWFhURFRMkHSggGBolHRUTITEiJSkrNS4uFyszODMsNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKy0rKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADMQAQACAQEGAwQJBQAAAAAAAAABAgMRBAUSIWGRMUFRI3GBwRMiMjNDUmJyoUJTsdHx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9aAVAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAAAAAAAAAAAAAAAAAAAA', 'admin');

	CREATE TABLE IF NOT EXISTS scholarship (
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		Name VARCHAR(255) NOT NULL,
		Jenjang VARCHAR NOT NULL,
		Kota VARCHAR NOT NULL,
		Description TEXT NOT NULL,
		Image VARCHAR NOT NULL,
		Kategori VARCHAR NOT NULL,
		Created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		);
	
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
