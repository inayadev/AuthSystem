
import { Request, Response } from "express";
import UserModel from "../Model/userModel";

const get =async (req: Request, res: Response): Promise<Response> => {
    try {
        const getuser = UserModel.find()
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