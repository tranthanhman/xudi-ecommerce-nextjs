import mongoose from "mongoose";

const connectDB = async () => {
    if(mongoose.connections[0].readyState){
        console.log("MongoDB is connected");
        return;
    }

    mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.MONGO_DB,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },err => {
        if(err) throw err;
        console.log("MongoDB is connected");
    })
}

export default connectDB;