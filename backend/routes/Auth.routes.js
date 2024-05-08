import express from "express";
import { google, login, signup } from "../controllers/Auth.controller.js";
const Route = express.Router();
Route.post("/api/signup", signup);
Route.post("/api/login", login);
Route.post("/api/google", google);
export default Route;
