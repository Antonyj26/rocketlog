import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";

const route = Router();

route.use("/users", usersRouter);
route.use("/sessions", sessionsRoutes);
route.use("/deliveries", deliveriesRoutes);

export { route };
