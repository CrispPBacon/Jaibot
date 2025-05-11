import User from "./models/user.js";
import { loginUser } from "./services/auth.js";
// ! AUTH CONTROLLER

/* POST http://localhost:3000/api/user 

  User Data E.G:
  {
    "data": {
        "email": 123email@mail.com,
        "username": "alsoriano",
        "password": "Blacks132",
        "first_name": "Allan",
        "last_name": "Soriano"
    }
  }
*/
export async function createUser(req, res, next) {
  try {
    const user = req.body.data;
    const data = await new User(user).save();
    return res.status(201).json(data);
  } catch (e) {
    next(e);
  }
}

/* POST http://localhost:3000/api/login 
  {
    "data": {
        "username": "alsoriano",
        "password": "Blacks132"
    }
  }
*/
export async function login(req, res, next) {
  try {
    const { username, password } = req.body.data || {};
    const user = await loginUser(username, password);
    req.session.user_id = user._id;

    const defaultProfilePath =
      "/uploads/9e43206d-2845-40e3-ae3b-ed15d35e3a96.jfif";
    const defaultProfileUrl =
      `${req.protocol}://${req.get("host")}` + defaultProfilePath;
    if (!user?.avatar) user.avatar = defaultProfileUrl;

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

/* DELETE http://localhost:3000/api/logout */
export async function logout(req, res, next) {
  try {
    req.session.destroy();
    res.clearCookie("connect.sid");
    return res.status(200).json({ msg: "You have logged out" });
  } catch (error) {
    next(error);
  }
}
