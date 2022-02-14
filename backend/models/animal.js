import mongoose from "mongoose";

const animalShema = new mongoose.Schema({
    name: String,
    race: String,
    health: String,
    weight: Number,
    height: Number,
    age: Number,
    registerDate: { type: Date, default: Date.now },
    dbStatus: Boolean
});

const animal = mongoose.model("animales" , animalShema);
export default animal;