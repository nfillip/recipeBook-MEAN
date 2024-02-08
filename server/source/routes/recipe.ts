import express from 'express';
import controller from '../controllers/recipe';
import controllerUser from '../controllers/user';
import extractJWT from '../middleware/extractJWT';
const router = express.Router();

router.get('/recipes/getAll', controller.getAllRecipes);
router.post('/recipes/create', controller.createRecipe);

router.get('/users/validate', extractJWT, controllerUser.validateToken);
router.post('/users/register', controllerUser.register);
router.post('/users/login', controllerUser.login);
router.get('/users/getAll', controllerUser.getAllUsers);
export = router;
