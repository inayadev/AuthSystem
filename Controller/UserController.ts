
import { Request, Response } from "express";
import UserModel from "../Model/userModel";

export const getAll =async (req: Request, res: Response): Promise<Response> => {
    try {
        const getuser = await UserModel.find()
        return res.status(200).json({
            message: "User gotten",
            data: getuser
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}


export const getOne =async (req: Request, res: Response): Promise<Response> => {
    try {
        const getOneUser = await UserModel.findById(req.params.id)
        return res.status(200).json({
            message: "User gotten",
            data: getOneUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}



export const Register =async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name, age,sex,email} = req.body
        const post =  await UserModel.create({name, age,sex,email})
        return res.status(200).json({
            message: "User Created",
            data: post
       })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

export const DeleteUser =async (req: Request, res: Response): Promise<Response>=> {
    try {
        const DeleteUser = await UserModel.deleteOne()
        return res.status(200).json({
            message: "User Deleted",
            data: DeleteUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}