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
