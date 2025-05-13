import express from "express";
import {
  login,
  logout,
  createUser,
  refreshAuth,
  newConversation,
  sendPrompt,
  getMessages,
} from "./controller.js";
import {
  validateLogin,
  validateSignUp,
} from "./middlewares/validators/main.js";
import { verifyAuth } from "./middlewares/auth-handler.js";

const router = express.Router();

// ? [PUBLIC] ROUTES
router.route("/api/login").post(validateLogin, login).get(refreshAuth);
router.route("/api/user").post(validateSignUp, createUser);

// ? [PRIVATE] ROUTES
router.use(verifyAuth);

// ! [AUTH] RELATED ROUTES
router.route("/api/chat").post(newConversation);
router.route("/api/chat/:id").post(sendPrompt).get(getMessages);
router.route("/api/logout").delete(logout);

export default router;
