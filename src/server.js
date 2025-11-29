import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";  
import connectDB from "./config/db.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();

const app = express();

swaggerDocs(app);

connectDB();

app.use(express.json());

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
