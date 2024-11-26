import {Router} from 'express';
import * as FriendController from "../controllers/friendControllers";

const router = Router();

router.post("/sendFriendRequest", FriendController.sendFriendRequest);

export default router;