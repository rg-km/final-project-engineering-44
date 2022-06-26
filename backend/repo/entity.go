package repo

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Image    string `json:"image"`
	Role     string `json:"role"`
}

type UserResponse struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"-"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Image    string `json:"image"`
	Role     string `json:"role"`
}

type Scholarship struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Jenjang     string `json:"jenjang"`
	Kota        string `json:"kota"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Kategori    string `json:"kategori"`
	CreatedAt   string `json:"created_at"`
}
