import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose
    .connect(URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});