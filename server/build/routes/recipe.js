"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const recipe_1 = __importDefault(require("../controllers/recipe"));
const router = express_1.default.Router();
router.get('/get/recipes', recipe_1.default.getAllRecipes);
router.post('/post/recipe', recipe_1.default.createRecipe);
module.exports = router;
