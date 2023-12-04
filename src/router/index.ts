import { Router } from "express";
import testRoutes from "./testRoutes";
export const router = Router();
router.get('/', (req, res) => res.send({ routes : router.stack}))
router.get("/break", (req, res) => res.send({w2s:"Charlotte"}))
router.use('/test', testRoutes)