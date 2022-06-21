const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.get("/", (req,res) => {res.send("HOME")});
app.get("/contacto", (req,res) => {res.send("1136003450")});

app.listen(port, () => {console.log("Servidor corriendo en http://localhost:" + port)});