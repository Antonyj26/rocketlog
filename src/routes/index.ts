import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";
import { deliveryLogsRoutes } from "./delivery-logs-routes";

const route = Router();

route.use("/users", usersRouter);
route.use("/sessions", sessionsRoutes);
route.use("/deliveries", deliveriesRoutes);
route.use("/delivery-logs", deliveryLogsRoutes);

export { route };
