import mongoose from "mongoose";

const dbConnection = async () => {
try {
  await mongoose.connect(process.env.BD_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connection with MongoDB : OK"); 
} catch (error) {
    console.log("Error Connecting to MongoDB : \n", error );
}
};

export default {dbConnection};