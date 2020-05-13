//Package app to manage global state
package app

import (
	"github.com/vugu/vugu"
)

var Event vugu.EventEnv

type App struct {
	ID       string
	LoggedIn bool `vugu:"data"`
	Name     string
	Email    string
	ImageURL string
	Token    string
}

var Me = App{}
