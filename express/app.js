// const express = require("express"); //commonjs
import express from 'express'; //es-module

const app = express();  //execute

// Route 1
app.get("/", (req, res) => {
    res.send("Page 1");
});

// Route 2
app.get("/abc", (req, res) => {
    res.send("Page 2");
});

// Route 3
app.get("/api", (req, res) => {
    res.send([
        {
            success: true,
            status: "ok",
            code : 202
        }
    ])
})

app.listen(2000);