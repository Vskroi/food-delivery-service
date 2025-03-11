import mongoose from "mongoose"; 
const foodSchame = new mongoose.Schema({
    foodName: {type : String , required:true},
    price: {type: Number, required: true},
    ingerdiets:{type:String , required: true},
    category:{type: mongoose.Types.ObjectId ,ref: "categories",  required: true}
});
export const Food = mongoose.model("foods" ,foodSchame )