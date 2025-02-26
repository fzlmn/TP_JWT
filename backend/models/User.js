import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    f_name:{
        type: String,
        required: true
    },
    l_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    pass:{
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;