import express from "express";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(req, res){
    const user = req.body;
    const salt = await bcrypt.genSalt();
    user.pass = await bcrypt.hash(user.pass, salt);
    await UserModel.create(user);
    res.status(201).json('User created successfully.');
}

export async function signIn(req, res){
    const user= await UserModel.findOne({"email":req.body.email});
    if(user){
        const result= await bcrypt.compare(req.body.pass,user.pass);
        if(result){
            const jwtToken = await jwt.sign({"email":user.email},process.env.SECRET_KEY, {expiresIn:"2h"})
            res.status(200).json(jwtToken);
        }
    }

}