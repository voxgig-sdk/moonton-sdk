package core

type MoontonError struct {
	IsMoontonError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMoontonError(code string, msg string, ctx *Context) *MoontonError {
	return &MoontonError{
		IsMoontonError: true,
		Sdk:              "Moonton",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MoontonError) Error() string {
	return e.Msg
}
