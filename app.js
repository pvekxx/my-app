const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("안녕안녕")
})

app.listen(3000, () => {
    console.log("server on~")
})