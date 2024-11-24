import {Router} from 'express';
import * as UserController from "../controllers/userControllers";

const router = Router();

router.post("/register", UserController.registerUser);

export default router;