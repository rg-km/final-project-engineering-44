package api

import (
	"github.com/golang-jwt/jwt/v4"
)

var jwtKey = []byte("secret")

type Claims struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Role     string `json:"role"`
	jwt.StandardClaims
}
