

import mongoose from "mongoose";

const AdminProjectSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    links : {type : Array, required : false},
}, { timestamps: true });

const AdminProject = mongoose.models.AdminProject || mongoose.model("AdminProject", AdminProjectSchema);

export default AdminProject;
