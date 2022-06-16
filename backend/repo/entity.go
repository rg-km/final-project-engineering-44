package repo

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Role     string `json:"role"`
}

type UserResponse struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"-"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Role     string `json:"role"`
}
