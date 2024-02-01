import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import { moviesRouter } from "./router/index.js";
import * as dotenv from 'dotenv';



dotenv.config()


const app = express();

app.use(cors());

app.use(morgan("dev"));


const PORT = process.env.PORT




app.use("/movies", moviesRouter.default)




app.listen(PORT, console.log("APP RUNNING @ port: " + PORT))

