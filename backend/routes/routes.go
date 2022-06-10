package routes

import (
	"ruang-beasiswa/controllers"

	"github.com/gofiber/fiber/v2"
)

func Router(app *fiber.App){
	app.Get("/", controllers.Auth)
}