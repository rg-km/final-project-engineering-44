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

func (u *UserRepository) CheckUser(email string, password string) (*UserResponse, error) {
	sqlStatement := `SELECT * FROM user WHERE email = ? AND password = ?;`

	rows, err := u.db.Query(sqlStatement, email, password)
	if err != nil {
		return nil, err
	}

	var user UserResponse
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Role)
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

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Password, &user.Email, &user.Jenjang, &user.Kota, &user.Role)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}

/////////////////////////////

func (u *UserRepository) GetAll() ([]User, error) {
	sqlStatement := `SELECT * FROM user;`

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	var users []User
	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Role)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (u *UserRepository) GetById(id int) (User, error) {
	sqlStatement := `SELECT * FROM user WHERE id = ?;`

	rows, err := u.db.Query(sqlStatement, id)
	if err != nil {
		return User{}, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Role)
		if err != nil {
			return User{}, err
		}
	}

	return user, nil
}

func (u *UserRepository) GetByEmail(email string) (User, error) {
	sqlStatement := `SELECT * FROM user WHERE email = ?;`

	rows, err := u.db.Query(sqlStatement, email)
	if err != nil {
		return User{}, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Role)
		if err != nil {
			return User{}, err
		}
	}

	return user, nil
}

func (u *UserRepository) Update(user User) (User, error) {
	sqlStatement := `UPDATE user SET username = ?, email = ?, password = ?, jenjang = ?, kota = ?, role = ? WHERE id = ?;`

	_, err := u.db.Exec(sqlStatement, user.Username, user.Email, user.Password, user.Jenjang, user.Kota, user.Role, user.Id)
	if err != nil {
		return User{}, err
	}

	return user, nil
}
func (u *UserRepository) Delete(id int) error {
	sqlStatement := `DELETE FROM user WHERE id = ?;`

	_, err := u.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}

// func (u *UserRepository) CheckUserRegisName(value string) (*User, error) {
// 	sqlStatement := `SELECT * FROM user WHERE name = ?;`

// 	rows, err := database.DB.Query(sqlStatement, value)
// 	fmt.Println(rows, err)
// 	if err != nil {
// 		return nil, err
// 	}

// 	var user User
// 	for rows.Next() {
// 		err = rows.Scan(&user.Id, &user.Username, &user.Password, &user.Email, &user.Jenjang, &user.Kota, &user.Role)
// 		if err != nil {
// 			return nil, err
// 		}
// 	}

// 	return &user, nil
// }
