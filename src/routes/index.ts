import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";

const route = Router();

route.use("/users", usersRouter);
route.use("/sessions", sessionsRoutes);

export { route };
