import express from "express";
import curriculumBl from "../business-logic/curriculumBl.js";

const curriculumRouter = express.Router();

curriculumRouter.get("/api/curriculum/:fileName", async (req, res) => {
  const result = curriculumBl.getCurriculum(req.params.fileName);

  return res.send(result);
});

export default curriculumRouter;
