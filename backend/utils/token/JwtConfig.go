package token

import (
	"time"

	"github.com/golang-jwt/jwt"
)

var JwToken = []byte("token")

type Claims struct {
	Name string `json: "name"`
	Role string `json: "role"`
	jwt.StandardClaims
}

func CreateToken(name string, role string)(string, error){
	exp := time.Now().Add(time.Hour * 1)

	claims := &Claims{
		Name: name,
		Role: role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: exp.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodES256, claims)
	tokenStr, err := token.SignedString(JwToken)
	if err != nil {
		return "Error: ", err
	}	

	return tokenStr, nil
} 


func ValidateToken(tokenStr string) (*Claims, error){
	jwtToken := func(token *jwt.Token) (interface{}, error){
		return JwToken, nil
	}

	token, err := jwt.ParseWithClaims(tokenStr, &Claims{}, jwtToken)
	if err != nil {
		return nil, err
	}

	if !token.Valid{
		return nil, err
	}

	claims := token.Claims.(*Claims)

	return claims, nil
}