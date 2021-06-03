const express = require("express")
const app = express()

app.use("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(process.env.PORT)
