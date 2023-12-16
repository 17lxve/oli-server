import { Router } from "express";
import { server } from '../app';
import { getAllRoutes } from "../utils";
import { queries } from "../db";

function testRoutesFactory(){
    // Create a router for specific subfolders of requests
    const testRoutes = Router();

    // Define sub-routes
    testRoutes.get("/", async(req, res) => res.send({msg:"Test 1, OK!"}));
    testRoutes.get("/routes", (req, res) => res.send({ routes : getAllRoutes(server) }));
    testRoutes.get("/sql", async (req, res) => res.send({ msg : await queries.getAllAdmins()}));
    // Return the router
    return testRoutes;
}

// Export the router with all routes added
export default testRoutesFactory();