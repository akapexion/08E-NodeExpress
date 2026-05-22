import mongoose from "mongoose";

const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://asadkaptech:123@ac-bsk4hip-shard-00-00.xs2nlyh.mongodb.net:27017,ac-bsk4hip-shard-00-01.xs2nlyh.mongodb.net:27017,ac-bsk4hip-shard-00-02.xs2nlyh.mongodb.net:27017/?ssl=true&replicaSet=atlas-dtdmx6-shard-0&authSource=admin&appName=Cluster0");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log("Error connecting db:", err);
    }
}

// dbConnect();
export default dbConnect;