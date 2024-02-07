import express from 'express';
import controller from '../controllers/recipe';
import controllerUser from '../controllers/user';
const router = express.Router();

router.get('/get/recipes', controller.getAllRecipes);
router.post('/post/recipe', controller.createRecipe);

router.get('/validate', controllerUser.validateToken);
router.post('/register', controllerUser.register);
router.post('/login', controllerUser.login);
router.get('/get/all', controllerUser.getAllUsers);
export = router;
