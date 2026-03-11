import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.route";
import { AuthRoute } from "../module/auth/auth.route";

const router = Router();

router.use("/auth", AuthRoute)
router.use("/specialities", specialityRouter);


export const IndexRoutes = router;
