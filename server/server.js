const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1/27017/"

mongoose.connect(DB_URI, { family: 4 })
    .then(() => console.log("Database Connected"))
    .catch(err => console.error("Failed to connect Database", err.message))

app.listen(() => {
    console.log(`Server listening at ${PORT}`);
})