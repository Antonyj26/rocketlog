import { Router } from "express";

import { usersRouter } from "./users-routes";

const route = Router();

route.use("/users", usersRouter);

export { route };
