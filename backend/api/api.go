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
	//gin.PUT("/api/user", api.UpdateUser)
	gin.DELETE("/api/user/:id", api.DeleteUser)
	gin.GET("/api/user", api.getUser)
	gin.GET("/api/user/:id", api.GetById)
	gin.GET("/api/scholarships", api.getScholarships)
	gin.GET("/api/scholarships/id/:id", api.getScholarshipsById)
	gin.GET("/api/scholarships/jenjang/:jenjang", api.getScholarshipsByJenjang)
	gin.GET("/api/scholarships/name/:name", api.getScholarshipsByName)
	gin.GET("/api/scholarships/kota/:kota", api.getScholarshipsByKota)
	gin.POST("/api/scholarships/upload", api.uploadScholarships)
	gin.PUT("/api/scholarships/:id", api.Updatebeasiswa)
	gin.DELETE("/api/scholarships/:id", api.DeleteScholarships)

	return api
}

func (api *API) Handler() *gin.Engine {
	return api.gin
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	api.Handler().Run(":8080")
}
