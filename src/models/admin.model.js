import mongoose from "mongoose";
 
//Schema => model
// collection => table
 
const usersSchema = new mongoose.Schema({
    email: { type: String, require: true},
    password: { type: String, require: true},
});
 
export const Users = mongoose.model("admin", usersSchema)