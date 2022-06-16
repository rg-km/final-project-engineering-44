package api

import (
	"auth/database"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func (api *API) login(c *gin.Context) {
	var request reqLogin
	err := json.NewDecoder(c.Request.Body).Decode(&request)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code":    http.StatusBadRequest,
			"message": "Invalid request body",
		})
		return
	}

	if request.Username == "" || request.Password == "" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "username dan password tidak boleh kosong",
		})
		return
	}

	resp, err := api.userRepo.CheckUser(request.Username, request.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}
	data := *resp
	fmt.Println(data)
	fmt.Println(data.Email, data.Password, data.Username, request.Password)
	if data.Password != request.Password {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "user credential invalid",
		})
		return
	} else if data.Username != request.Username {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "user credential invalid",
		})
		return
	}

	expirationTime := time.Now().Add(24 * time.Hour)

	claims := &Claims{
		Email:    data.Email,
		Username: data.Username,
		Role:     data.Role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}
	// Buat token menggunakan encoded claim dengan salah satu algoritma yang dipakai
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)

	http.SetCookie(c.Writer, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})

	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "login success",
		"data":    data,
	})


}

func (api *API) Register(c *gin.Context) {
	var request reqRegister

	err := json.NewDecoder(c.Request.Body).Decode(&request)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code":    http.StatusBadRequest,
			"message": "Invalid request body",
		})
		return
	}

	if request.Username == "" || request.Password == "" || request.Email == "" || request.Jenjang == "" || request.Domisili == ""  {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "username dan password tidak boleh kosong",
		})
		return
	}

	_, err = api.userRepo.CheckUserRegis(request.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": "Email sudah terdaftar",
		})
		return
	}

	// data := *resp

	records := `INSERT INTO user (username, password, email, role, jenjang, domisili) VALUES (?, ?, ?, ?, ?, ?);`
	query, err := database.DB.Prepare(records)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}

	_, err = query.Exec(request.Username, request.Password, request.Jenjang, request.Domisili, request.Email, "user")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "Register Success",
	})

}
