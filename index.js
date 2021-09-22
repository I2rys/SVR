//Dependencies
const Express = require("express")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

//Main
Web.use(Express.static(__dirname + "/public"))

Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}`)
})
