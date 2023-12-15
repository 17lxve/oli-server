import { Router } from "express";
import { generateQR } from "../helpers";

function qrRoutesFactory(){
    // Create a router for specific subfolders of r<equests
    const qrRoutes = Router();

    // Define sub-routes
    qrRoutes.post("/", async(req, res) =>{
        res.send({msg:generateQR(req.body.data)})
        // res.send({ if_i_break : "Could i go on break?" })
    });
    
    // Return the router
    return qrRoutes;
}

// Export the router with all routes added
export default qrRoutesFactory();