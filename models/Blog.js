import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    thumbnail: {type: String, required:false},
    content: {type: String, required: true},
    author: {type: String, required: true},
    grade: {type: Number},
    post: {type: String}
}, {timestamps: true});
mongoose.models = {}
module.exports =  mongoose.model("Blog", blogSchema);