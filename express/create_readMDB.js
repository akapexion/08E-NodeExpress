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

// createUser();


const getUsers = async() => {
    try{
        const users = await user.find();

        console.log("My Users:", users);
    }
    catch(err){
        console.log(err);
    }
}

// getUsers();

const updateUser = async(id, updatedData) => {
    try{
        await user.updateOne({_id: id}, {$set: updatedData});
        console.log("Data updated successfully");
    }   
    catch(err){
        console.log(err);
    }
}

const id = "6a103a3321ff4fc3fff9001f";
const updatedData = {
    user_name : "Hassan",
    user_email : "hassan@gmail.com"
}

updateUser(id, updatedData);


