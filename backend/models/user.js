import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    animal:{ type:mongoose.Schema.ObjectId, ref:"animales"},
    registerDate: { type: Date, default: Date.now},
    dbStatus:Boolean
});

const user = mongoose.model("users", userShema);
export default user;

