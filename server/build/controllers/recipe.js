"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recipe_1 = __importDefault(require("../models/Recipe"));
const mongoose_1 = __importDefault(require("mongoose"));
// GET
const getAllRecipes = (req, res, next) => {
    Recipe_1.default.find()
        .exec()
        .then((results) => {
        return res.status(200).json({
            books: results,
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
const createRecipe = (req, res, next) => {
    let { author, title } = req.body;
    const recipe = new Recipe_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        author,
        title
    });
    return recipe
        .save()
        .then((result) => {
        return res.status(201).json({
            book: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = {
    getAllRecipes,
    createRecipe
};
