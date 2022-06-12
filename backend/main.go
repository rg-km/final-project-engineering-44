package main

import (
	"ruang-beasiswa/database"
	"ruang-beasiswa/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
    database.Connect()

    app := fiber.New()

    routes.Router(app)

    app.Listen(":8000")
}