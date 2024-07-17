const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("내가 보임?")
})

app.listen(3000, (req, res) => {
    console.log("server on~")
})