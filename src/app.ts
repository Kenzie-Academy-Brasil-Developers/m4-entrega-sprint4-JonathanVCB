import express from "express";
import "reflect-metadata";
import "express-async-errors";
import usersRoutes from "./routes/usersRoutes";
import sessionRoutes from "./routes/sessionUserRoutes";
import handleError from "./errors/handleError";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", sessionRoutes);

app.use(handleError);

export default app;
