import express from "express";
import "express-async-errors";
import { errorHandling } from "./middlewares/error-handling";
import { route } from "./routes";

const app = express();

app.use(express.json());
app.use(route);
app.use(errorHandling);
export { app };
