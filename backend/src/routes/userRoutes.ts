import {Router} from 'express';
import * as UserController from "../controllers/userControllers";

const router = Router();

router.post("/register", UserController.registerUser);
router.post("/login", UserController.login);

export default router;