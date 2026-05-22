import express from 'express';

const app = express();

const PORT = 3000;


// middleware function
const salaryLogic = (request, response, next) => {
    const salary = request.query.salary;
    if(!salary){
        response.send("Salary not provided");
    }
    else if(salary < 30000){
         response.send("Salary is less than 30K");
    }
    else {
        next();
    }
}

app.use(salaryLogic);

app.get("/", (req, res) => {
    res.send("Home Screen");
})

app.get("/about", (req, res) => {
    res.send("About Screen");
})

app.get("/contact", (req, res) => {
    res.send("Contact Screen");
})


app.listen(PORT, () => {
    console.log("Your File is running...");
})