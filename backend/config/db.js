import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO_HTTP, {})
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("error!", err);
  });
export default mongoose;
