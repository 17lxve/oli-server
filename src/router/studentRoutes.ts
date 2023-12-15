import { Router } from "express";

function studentRoutesFactory(){
    const studentRoutes = Router();
    studentRoutes.get("/", (req, res) => res.send({getAllStudents:"WIP"}))
    studentRoutes.post("/:name", (req, res) => res.send({getOneStudent:"WIP"}))
    studentRoutes.put("/:name", async (req, res) => res.send({modifierStudent : "WIP"}))
    studentRoutes.delete("/:name",async (req, res) => res.send({deleteStudent:"WIP"}))
}

export default studentRoutesFactory();