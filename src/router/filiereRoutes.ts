import { Router } from "express";

function filiereRoutesFactory(){
    const filiereRoutes = Router();
    filiereRoutes.get("/", (req, res) => res.send({getAllFilieres:"WIP"}))
    filiereRoutes.post("/:name", (req, res) => res.send({getOneFiliere:"WIP"}))
    filiereRoutes.put("/:name", async (req, res) => res.send({modifierFilière : "WIP"}))
    filiereRoutes.delete("/:name",async (req, res) => res.send({deleteFilière:"WIP"}))
}

export default filiereRoutesFactory();