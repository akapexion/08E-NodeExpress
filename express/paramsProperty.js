import express from 'express';

const app = express();


app.get("/api/:mail", (req, res) => {
    res.send(`${req.params.mail}`);
})



app.listen(2000, () => {
    console.log("Server is Started!!!");
})