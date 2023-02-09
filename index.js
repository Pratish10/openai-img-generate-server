import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();
const port = process.env.PORT || 8000;
const HOST = "0.0.0.0";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", apiRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from Pratish",
  });
});

const startServer = async () => {
  try {
    // use your mongodb url BELOW
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () =>
      console.log(`Server is up and running on http://${HOST}:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

// monogodb:
//     volumes:
//       - mern_db:/data/db
//     image: mongo:latest
//     ports:
//       - "27017:27017"
// volumes:
//    mern_db:
