import express from "express";
import Route from "./routes/Auth.routes.js";
import "./config/db.js";
const app = express();

app.use(express.json());
app.use(Route);
app.listen(8000, () => {
  console.log("server started ");
});
//error handel
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    sucess: false,
    message,
    statusCode,
  });
});
