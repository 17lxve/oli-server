import { Router } from "express";
import { server } from '../app';
import { getAllRoutes } from "../utils";
import { queries } from "../sql";

function testRoutesFactory(){
    // Create a router for specific subfolders of requests
    const testRoutes = Router();

    // Define sub-routes
    testRoutes.get("/", async(req, res) => res.send({msg:"Test 1, OK!"}));
    testRoutes.get("/routes", (req, res) => res.send({ routes : getAllRoutes(server) }));
    testRoutes.get("/sql", async (req, res) => {
        // try{
            res.send({ msg : await queries.getAllAdmins()})

            // await pool.query('SELECT * FROM "Admins";', (err, results) => err ? res.send(err) : res.send(results.rows))
        // } catch(e:any) {
        //     res.send({msg : "e"})
        // }
    }
    )
    // Return the router
    return testRoutes;
}

// Export the router with all routes added
export default testRoutesFactory();