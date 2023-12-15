import { Router } from 'express'

function userRoutesFactory(){
    const userRoutes = Router();
    
    userRoutes.post("/login", async (req, res) => res.send({Login : "WIP"}));
    userRoutes.post("/add", async (req, res) => res.send({addUser : "WIP"}));
    userRoutes.delete("/remove", async (req,res) => res.send({delUser : "WIP"}))

    return userRoutes
}

export default userRoutesFactory();