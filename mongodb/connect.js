import mongoose from "mongoose";

const connectDB = (url) => {
  if (!url) {
    console.error("The `url` argument is required");
    return;
  }
  mongoose.set("strictQuery", true);
  mongoose.connect(url).then(() => console.log("connected to mongo"));
};

export default connectDB;
