package middleware

import (
	"net/http"

	"ruang-beasiswa/utils/token"

	"github.com/gin-gonic/gin"
)

func Access() gin.HandlerFunc{
	return func(ctx *gin.Context) {
		tokenStr := ctx.Request.Header.Get("Authorization")
		if tokenStr == "" {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"message": "Unauthorized",
			})
			ctx.Abort()
			return
		}

		claims, err := token.ValidateToken(tokenStr)
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"message": "Unauthorized",
			})
			ctx.Abort()
			return
		}

		ctx.Set("user", claims)
		ctx.Next()
	}
}