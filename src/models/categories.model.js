import mongoose from "mongoose";

const categoriesSchmea = new mongoose.Schema({
    cateryName :{Type: String , require: true}
})
export const Categories = mongoose.model("categories" , categoriesSchmea)