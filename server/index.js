const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.resolve("./dist")))

const PORT = process.env.PORT || 3001 

app.listen(PORT , () => console.log("App is Working in localhost:3001"))