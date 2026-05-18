const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "https://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("API Running...")
})

module.exports = app;
