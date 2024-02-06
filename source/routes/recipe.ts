import express from 'express';
import controller from '../controllers/recipe';
const router = express.Router();

router.get('/get/recipes', controller.getAllRecipes);
router.post('/post/recipe', controller.createRecipe);
export = router;
