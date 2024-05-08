import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.util.js";
export const signup = async (req, res, next) => {
  try {
    // if (req.body.password.trim() === "") {
    //   throw new Error("Password cannot be empty");
    // }
    const hashpassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashpassword });
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
export const login = (req, res, next) => {
  return res.status(200).json("login");
};
export const google = (req, res, next) => {
  return res.status(200).json("google");
};
