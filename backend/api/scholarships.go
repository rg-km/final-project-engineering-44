package api

import (
	"auth/database"
	"encoding/json"

	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ScholarshipsListErrorResponse struct {
	Error string `json:"error"`
}

type ScholarshipsListSuccessResponse struct {
	Scholarships []reqScholarship `json:"scholarships"`
}

// mengapload konten beasiswa
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

	if beasiswa.Name == "" || beasiswa.Jenjang == "" || beasiswa.Kota == "" || beasiswa.Description == "" || beasiswa.Image == "" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "tidak boleh kosong",
		})
		return
	}

	records := `INSERT INTO scholarship (name, jenjang, kota, description, image, category_id) VALUES (?, ?, ?, ?, ?, ?);`
	query, err := database.DB.Prepare(records)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}

	_, err = query.Exec(beasiswa.Name, beasiswa.Jenjang, beasiswa.Kota, beasiswa.Description, beasiswa.Image, beasiswa.Category_id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "Upload Success",
	})
}

// menampilkan seluruh konten beasiswa
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

// menampilkan beasiswa berdasarkan id
func (a *API) getScholarshipsById(c *gin.Context) {
	id := c.Param("id")
	beasiswa, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	scholarship, err := a.scholarshipRepo.GetById(int(beasiswa))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "scholarship",
		"data":    scholarship,
	})
}

// menampilkan beasiswa berdasarkan jenjang
func (a *API) getScholarshipsByJenjang(c *gin.Context) {
	jenjang := c.Param("jenjang")
	beasiswa, err := a.scholarshipRepo.GetByJenjang(jenjang)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	if len(beasiswa) == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "beasiswa not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Beasiswa ditemukan",
		"data":    beasiswa,
	})
}

// menampilkan beasiswa berdasarkan kota
func (a *API) getScholarshipsByKota(c *gin.Context) {
	kota := c.Param("kota")
	beasiswa, err := a.scholarshipRepo.GetByKota(kota)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	if len(beasiswa) == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "beasiswa not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Beasiswa ditemukan",
		"data":    beasiswa,
	})
}

// menampilkan beasiswa berdasarkan nama
func (a *API) getScholarshipsByName(c *gin.Context) {
	name := c.Param("name")
	beasiswa, err := a.scholarshipRepo.GetByName(name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	if len(beasiswa) == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "beasiswa not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Beasiswa ditemukan",
		"data":    beasiswa,
	})
}

// menghapus konten biasiswa
func (a *API) DeleteScholarships(c *gin.Context) {
	id := c.Param("id")
	beasiswa, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	scholarship, err := a.scholarshipRepo.Delete(int(beasiswa))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Beasiswa berhasil dihapus",
		"data":    scholarship,
	})
}

// upadate data beasiswa

func (a *API) Updatebeasiswa(c *gin.Context) {
	id := c.Param("id")
	beasiswa, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	scholarship, err := a.scholarshipRepo.Update(int(beasiswa))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Berhasil di update",
		"data":    scholarship,
	})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// func (a *API) updateScholarships(c *gin.Context) {
// 	var beasiswa reqScholarship
// 	err := json.NewDecoder(c.Request.Body).Decode(&beasiswa)
// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"code":    http.StatusBadRequest,
// 			"message": "Invalid request body",
// 		})
// 		return
// 	}
// 	if beasiswa.Name == "" || beasiswa.Jenjang == "" || beasiswa.Kota == "" || beasiswa.Description == "" || beasiswa.Image == "" {
// 		c.JSON(http.StatusUnauthorized, gin.H{
// 			"code":    http.StatusUnauthorized,
// 			"message": "tidak boleh kosong",
// 		})
// 		return
// 	}
// 	records := `UPDATE scholarship SET name = ?, jenjang = ?, kota = ?, description = ?, image = ?, category_id = ? WHERE id = ?`
// 	query, err := database.DB.Prepare(records)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{
// 			"code":    http.StatusInternalServerError,
// 			"message": err.Error(),
// 		})
// 		return
// 	}
// 	_, err = query.Exec(beasiswa.Name, beasiswa.Jenjang, beasiswa.Kota, beasiswa.Description, beasiswa.Image, beasiswa.Category_id, beasiswa.Id)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{
// 			"code":    http.StatusInternalServerError,
// 			"message": err.Error(),
// 		})
// 		return
// 	}
// }
