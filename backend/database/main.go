package database

import "database/sql"

var DB *sql.DB

func Connect() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./user.db")
	if err != nil {
		return nil, err
	}
	DB = db
	return db, nil
}
