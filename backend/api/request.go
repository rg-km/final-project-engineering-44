package api

type reqLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type reqRegister struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
}

type reqScholarship struct {
	Id          int    `json:"id"`
	User_id     int    `json:"user_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Jenjang     string `json:"jenjang"`
	Kota        string `json:"kota"`
	Category_id int    `json:"category"`
	CreatedAt   string `json:"created_at"`
}
