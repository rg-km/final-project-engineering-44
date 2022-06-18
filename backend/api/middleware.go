package api

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func (api *API) AllowOrigin(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Content-Type", "text/html; charset=utf-8")
	if c.Request.Method == "OPTIONS" {
		c.Writer.WriteHeader(http.StatusOK)
		return
	}
}

func (api *API) AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		encoder := json.NewEncoder(w)
		// Ambil token dari cookie yang dikirim ketika request
		c, err := r.Cookie("token")
		if err != nil {
			if err == http.ErrNoCookie {
				// return unauthorized ketika token kosong
				encoder.Encode(gin.H{
					"code":    http.StatusUnauthorized,
					"message": "unauthorized",
				})
				return
			}
			// return bad request ketika field token tidak ada
			encoder.Encode(gin.H{
				"code":    http.StatusBadRequest,
				"message": "BadRequest",
			})
			return
		}
		//parse JWT token ke dalam claim
		tknStr := c.Value
		claims := &Claims{}
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})
		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				// return unauthorized ketika signature invalid
				encoder.Encode(gin.H{
					"code":    http.StatusUnauthorized,
					"message": "invalid token",
				})
				return
			}
			// return bad request ketika field token tidak ada
			encoder.Encode(gin.H{
				"code":    http.StatusBadRequest,
				"message": "invalid token",
			})
			return
		}
		//return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
		if !tkn.Valid {
			encoder.Encode(gin.H{
				"code":    http.StatusUnauthorized,
				"message": "invalid token",
			})
			return
		}
		ctx := context.WithValue(r.Context(), "user", claims.Username)
		ctx = context.WithValue(ctx, "role", claims.Role)
		ctx = context.WithValue(ctx, "props", claims)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func (api *API) AdminMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		encoder := json.NewEncoder(w)
		role := r.Context().Value("role")
		if role != "admin" {
			encoder.Encode(gin.H{
				"code":    http.StatusUnauthorized,
				"message": "forbidden access",
			})
			return
		}
		next.ServeHTTP(w, r)
	})
}

func (api *API) GET(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		encoder := json.NewEncoder(w)
		if r.Method != http.MethodPost {
			encoder.Encode(gin.H{
				"code":    http.StatusMethodNotAllowed,
				"message": "Need GET Method!",
			})
			return
		}
		next.ServeHTTP(w, r)
	})
}

func (api *API) POST(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		encoder := json.NewEncoder(w)
		if r.Method != http.MethodPost {
			encoder.Encode(gin.H{
				"code":    http.StatusMethodNotAllowed,
				"message": "Need POST Method!",
			})
			return
		}
		next.ServeHTTP(w, r)
	})
}
