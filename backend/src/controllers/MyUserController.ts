import { Request,Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request,res: Response) => {

    try{
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        //checking if user exists or not (hai to status ok)
        if(existingUser)
        {
            return res.status(200).send();
        }

        //jab login karke wapas redirect aayega to yaha pe user create hoga apne backend mai uske email and name se jo ki milega use object se
        const newUser = new User(req.body);
        await newUser.save();

        //object returned kar diya req karne wale client ko 
        res.status(201).json(newUser.toObject());
    }catch(error){
        console.log(error);
        res.status(500).json({message : "Error Creating the User"})
    }
};



export default {
    createCurrentUser,
};