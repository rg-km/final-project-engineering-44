package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./user.db")
	if err != nil {
		panic(err)
	}
	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users(
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		Name VARCHAR NOT NULL,
		Email VARCHAR NOT NULL,
		Jenjang VARCHAR NOT NULL,
		Domisili VARCHAR NOT NULL,
		Password VARCHAR NOT NULL,
		Created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	);

	CREATE TABLE IF NOT EXISTS scholarships(
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		User_id INTEGER,
		Name VARCHAR(255) NOT NULL,
		Description TEXT NOT NULL,
		Jenjang VARCHAR(255) NOT NULL,
		Domisili VARCHAR(255) NOT NULL,
		Image VARCHAR DEFAULT 'image.jpg',
		Category_id INTEGER NOT NULL,
		Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (User_id) REFERENCES users(id),
		FOREIGN KEY (Category_id) REFERENCES categories(id)
	);

	CREATE TABLE IF NOT EXISTS categories (
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
	);`)
	if err != nil {
		panic(err)
	}
	fmt.Println("Database created!")
	defer db.Close()
}
