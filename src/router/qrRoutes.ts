import { Router } from "express";
import { generateQR } from "../helpers";

function qrRoutesFactory(){
    // Create a router for specific subfolders of requests
    const qrRoutes = Router();

    // Define sub-routes
    qrRoutes.get("/", async(req, res) =>{
        res.send({msg:generateQR()})
        // res.send({ if_i_break : "Could i go on break?" })
    });
    
    // Return the router
    return qrRoutes;
}

// Export the router with all routes added
export default qrRoutesFactory();