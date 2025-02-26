import express from "express";

import {signUp, signIn} from "../controllers/LoginController.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

export default router;
