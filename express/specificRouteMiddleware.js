import express from 'express';
const app = express();

const route = express.Router();

const PORT = 5000;

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

route.use(salaryLogic); 


app.get("/", (req, res) => {
    res.send("Home Screen");
})

app.get("/about", salaryLogic, (req, res) => {
    res.send("About Screen");
})



app.listen(PORT, () => {
    console.log("Server is Started");
})
