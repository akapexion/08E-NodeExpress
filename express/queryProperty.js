import express from 'express'; //import-esModule

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("My Main API Content");
});

app.get("/myURL", (request, response) => {
    const name = request.query.name;
    const email = request.query.email;

    if (name && email) {
        response.send(`Welcome ${name} & it's email is ${email}`);
    }
    else {
        response.send("No Request Found...");
    }
});

app.listen(PORT, () => {
    console.log(` Server is running on : http://localhost:${PORT}`);
})
