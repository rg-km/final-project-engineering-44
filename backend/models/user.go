package models

import "time"


type User struct{
	Id uint
	CreatedAt time.Time
	Username string
	Email string
	Password string
	Jenjang string
	Domisili string
}
