import mongoose from "mongoose";

const varnaSchema = new mongoose.Schema({
    class: {type: Array, required: true},
    deadline: {type: String, required: true},
    email: {type:String, default:"sankalpa115@gmail.com"}
}, {timestamps: true});
mongoose.models = {}
module.exports =  mongoose.model("Varna", varnaSchema);