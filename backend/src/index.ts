import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGOSB_CONNECTION_STRING as string)
.then(() => console.log("Connected to database"));

const app = express();
