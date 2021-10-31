require("dotenv").config()
//Configure the server
const express = require("express")
const app = express()

//Connect to Database
const mongoose = require("mongoose")
mongoose.connect(process.env.DatabaseURL, {useNewUrlParser: true})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))


app.use(express.json)

//Connect to the subscribers route
const subscribersRouter = require("./routes/subscribers")
app.use("/subscribers", subscribersRouter)


app.listen(3000, ()  => console.log("Server Started") )
 

