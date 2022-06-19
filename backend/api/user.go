package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserListErrorResponse struct {
	Error string `json:"error"`
}

type ListUser struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Role     string `json:"role"`
}

type UserListSuccessResponse struct {
	Users []ListUser `json:"users"`
}

func (a *API) getUser(c *gin.Context) {
	user, err := a.userRepo.GetAll()
	if err != nil {
		var userListErrorResponse UserListErrorResponse
		userListErrorResponse.Error = err.Error()
		c.JSON(http.StatusInternalServerError, userListErrorResponse)
		return
	}
	c.JSON(http.StatusOK, user)

}

// func (a *API) GetById(c *gin.Context) {
// 	user, err := a.userRepo.GetById(int(id))
// 	if err != nil {
// 		var userListErrorResponse UserListErrorResponse
// 		userListErrorResponse.Error = err.Error()
// 		c.JSON(http.StatusInternalServerError, userListErrorResponse)
// 		return
// 	}
// 	c.JSON(http.StatusOK, user)

// }

func (a *API) GetByEmail(c *gin.Context) {
	user, err := a.userRepo.GetByEmail("")
	if err != nil {
		var userListErrorResponse UserListErrorResponse
		userListErrorResponse.Error = err.Error()
		c.JSON(http.StatusInternalServerError, userListErrorResponse)
		return
	}
	c.JSON(http.StatusOK, user)

}
