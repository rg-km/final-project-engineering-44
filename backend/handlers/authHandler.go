package handlers

import (
	"fmt"
	"net/http"
	"ruang-beasiswa/handlers/middleware"
	"ruang-beasiswa/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

type UserHandler struct {
	userRepo models.User
}

func NewUserHandler(r *gin.Engine, userRepo models.User){
	handler := &UserHandler{
		userRepo: userRepo,
	}

	auth := r.Group("/api")
	auth.Use(middleware.Access()){
		// Get All User
		auth.GET("/users",)
		// Get User
		auth.GET("/users:id",)
		// Post User
		auth.POST("/users",)
		// Edit User
		auth.PUT("/users:id",)
		// Delete User
		auth.DELETE("/users:id",)
	}
}