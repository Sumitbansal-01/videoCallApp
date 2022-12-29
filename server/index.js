const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
require("./database/connection")
const User = require("./models/userSchema")
app.use(require("./router/user"))
app.get("/", (req, res) => {
    res.send('Checking Get Method')

})



app.listen(process.env.PORT, () => {
    console.log('File is running on', process.env.PORT)
})