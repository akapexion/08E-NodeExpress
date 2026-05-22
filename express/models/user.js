import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    user_name : String,
    user_email : String,
    user_role : String,
    user_password : String
})

const user = mongoose.model("User", userSchema);

export default user;