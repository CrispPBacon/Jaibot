import express from "express";
import { login, logout, createUser } from "./controller.js";
import {
  validateLogin,
  validateSignUp,
} from "./middlewares/validators/main.js";
import { verifyAuth } from "./middlewares/auth-handler.js";

const router = express.Router();

// ? [PUBLIC] ROUTES
router.route("/api/login").post(validateLogin, login);
router.route("/api/user").post(validateSignUp, createUser);

// ? [PRIVATE] ROUTES
router.use(verifyAuth);

// ! [AUTH] RELATED ROUTES
router.route("/api/logout").delete(logout);

export default router;
