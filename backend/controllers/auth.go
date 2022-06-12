package controllers

import "github.com/gofiber/fiber/v2"

func Auth(c *fiber.Ctx) error{
	return c.SendString("Hello from auth")	
}