import express from "express";
import { specialityController } from "./speciality.controller";

const router = express.Router();

router.post("/", specialityController.createSpeciality);
router.get("/", specialityController.getAllSpecialities);
router.delete("/:id", specialityController.deleteSpeciality);
router.patch("/:id", specialityController.updateSpeciality);

export const specialityRouter = router;
