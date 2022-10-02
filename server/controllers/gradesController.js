import express from "express";

import gradesBl from "../business-logic/gradesBl.js";
const gradesRouter = express.Router();

gradesRouter.get("/api/grades/:fileName", async (req, res) => {
  const result = gradesBl.getGradesArray(req.params.fileName);
  res.send(result);
});

export default gradesRouter;
