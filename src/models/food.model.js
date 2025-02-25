import mongoose from "mongoose";
const foodSchame = new mongoose.Schema({
    foodName: {type : String , require:true},
    price: {type: Number, require: true},
    ingerdiets:{type:String , require: true},
    category:{type: mongoose.Types.ObjectId , require: true}
});
export const Users = mongoose.model("foods" ,foodSchame )