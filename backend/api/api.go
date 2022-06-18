package api

import (
	"fmt"

	"auth/repo"

	"github.com/gin-gonic/gin"
)

type API struct {
	userRepo        repo.UserRepository
	scholarshipRepo repo.ScholarshipsRepository
	gin             *gin.Engine
}

func NewAPI(userRepo repo.UserRepository, scholarshipRepo repo.ScholarshipsRepository) *API {
	gin := gin.Default()

	api := &API{
		userRepo:        userRepo,
		scholarshipRepo: scholarshipRepo,
		gin:             gin,
	}

	// gin.POST("/login/siswa", api.LoginSiswa)

	// user := gin.Group("/user")
	// {
	// 	user.POST("/login", api.LoginUser)
	// }
	gin.POST("/api/login", api.login)
	gin.POST("/api/register", api.Register)
	gin.POST("/api/logout", api.Logout)
	gin.GET("/api/user", api.getUser)
	gin.GET("/api/scholarships", api.getScholarships)
	gin.POST("/api/upload", api.uploadScholarships)

	return api
}

func (api *API) Handler() *gin.Engine {
	return api.gin
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	api.Handler().Run(":8080")
}
