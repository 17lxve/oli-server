// Import the routes from each file
import testRoutes from "./testRoutes";
import qrRoutes from "./qrRoutes";
import userRoutes from "./userRoutes";
import { Router } from "express";

function init(){
    // Create a router for general use
    const router = Router()

    // Add the routes to the router
    // Simple routes
    router.get('/', (req, res) => res.send({ routes : router.stack}))
    // Grouped routes
    router.use('/test', testRoutes);
    router.use('/qr', qrRoutes);
    router.use('/user', userRoutes)
    // Return the router
    return router;
}

// Exoprt the route module
export const router = init();
