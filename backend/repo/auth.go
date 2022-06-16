package repo

import (
	"auth/database"
	"database/sql"
	"fmt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) CheckUser(username string, password string) (*User, error) {
	sqlStatement := `SELECT * FROM user WHERE username = ? AND password = ?;`

	rows, err := u.db.Query(sqlStatement, username, password)
	if err != nil {
		return nil, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Role)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}

func (u *UserRepository) CheckUserRegis(value string) (*User, error) {
	sqlStatement := `SELECT * FROM user WHERE email = ?;`

	rows, err := database.DB.Query(sqlStatement, value)
	fmt.Println(rows, err)
	if err != nil {
		return nil, err
	}

	fmt.Println("sampai")
	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Password, &user.Email, &user.Role, &user.Jenjang, &user.Domisili)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}
