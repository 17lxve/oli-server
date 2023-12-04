import { Router } from "express";

function testRoutesFactory(){
    const testRoutes = Router()
    testRoutes.get("/home", async(req, res) => res.send({msg:"Going Strong"}))
    return testRoutes
}

export default testRoutesFactory()