package api

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ScholarshipsListErrorResponse struct {
	Error string `json:"error"`
}

type ListScholarships struct {
	Id          string `json:"id"`
	User_id     string `json:"user_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Jenjang     string `json:"jenjang"`
	Kota        string `json:"kota"`
	Category_id string `json:"category"`
	CreatedAt   string `json:"created_at"`
}

type ScholarshipsListSuccessResponse struct {
	Scholarships []ListScholarships `json:"scholarships"`
}

func (a *API) getScholarships(c *gin.Context) {
	beasiswa, err := a.scholarshipRepo.GetAll()
	if err != nil {
		var scholarshipsListErrorResponse ScholarshipsListErrorResponse
		scholarshipsListErrorResponse.Error = err.Error()
		c.JSON(http.StatusInternalServerError, scholarshipsListErrorResponse)
		return
	}
	c.JSON(http.StatusOK, beasiswa)
}
func (a *API) uploadScholarships(c *gin.Context) {
	var beasiswa reqScholarship
	err := json.NewDecoder(c.Request.Body).Decode(&beasiswa)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code":    http.StatusBadRequest,
			"message": "Invalid request body",
		})
		return
	}

	if beasiswa.Name == "" || beasiswa.Description == "" || beasiswa.Image == "" || beasiswa.Jenjang == "" || beasiswa.Kota == "" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "tidak boleh kosong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "Upload Success",
	})
}
