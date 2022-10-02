import express from "express";
import cors from "cors";
import curriculumRouter from "./controllers/curriculumController.js";
import gradesRouter from "./controllers/gradesController.js";
import uploadRouter from "./controllers/uploadController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", curriculumRouter);
app.use("/", gradesRouter);
app.use("/", uploadRouter);

app.listen(5001, () => {
  console.log(`server is running on port 5001 localhost!`);
});
