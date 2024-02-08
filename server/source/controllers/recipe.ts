import { Request, Response, NextFunction } from 'express';
import Recipe from '../models/Recipe';
import mongoose from 'mongoose';
import logging from '../config/logging';

// GET
const getAllRecipes = (req: Request, res: Response, next: NextFunction) => {
    Recipe.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                results: results,
                count: results.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

//POST
const createRecipe = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return recipe
        .save()
        .then((result) => {
            return res.status(201).json({
                recipe: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};
export default {
    getAllRecipes,
    createRecipe
};
