import {NextFunction, Request, Response} from 'express'
import logging from '../config/logging';
import bcryptjs from 'bcryptjs'
const NAMESPACE = "User";

//
const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Token validated, user authorized");

    return res.status(200).json({
        message: "Authorized"
    })
}

//Creating new user and storing in database
const register = (req: Request, res: Response, next: NextFunction) => {
    let {username, password} = req.body;

    //10 salt rounds
    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            })
        }
        //TODO: Insert user into DB
    })
};

//Login User and return token
const login = (req: Request, res: Response, next: NextFunction) => {};

//Return every user in database
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {};


export default {validateToken, register, login, getAllUsers};