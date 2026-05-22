import dbConnect from "./config/db.js";
import user from './models/user.js';

dbConnect();

const createUser = async() => {
    try{
        await user.insertMany([
            {
            user_name : "Zain",
            user_email : "zain@gmail.com",
            user_role : "employee",
            user_password : "Zain123"
            },
            {
            user_name : "Zuberi",
            user_email : "zuberi@gmail.com",
            user_role : "employee",
            user_password : "Zuberi123"
            },
            {
            user_name : "Muzammil",
            user_email : "muzammil@gmail.com",
            user_role : "employee",
            user_password : "Muzammil123"
            },
    
    ]);
        console.log("Data inserted successfully!");
    }
    catch(err){
        console.log(err);
    }
}

createUser();