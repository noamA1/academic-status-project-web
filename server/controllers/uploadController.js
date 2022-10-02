import express from "express";
import { upload } from "../common/helper.js";

const uploadRouter = express.Router();
uploadRouter.post(`/api/upload`, upload.single("file"), (req, res) => {
  res.json({ url: `${upload.getDestination}` + upload.getFilename });
});

export default uploadRouter;
