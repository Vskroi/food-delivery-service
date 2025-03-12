import mongoose from "mongoose";

const categoriesSchmea = new mongoose.Schema({
    cateryName :{type: String , required: true}
    
})
export const Categories = mongoose.model("categories" , categoriesSchmea)