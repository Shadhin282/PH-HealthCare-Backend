import { Request, Response } from "express";
import { specialityService } from "./speciality.service";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";



const createSpeciality = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await specialityService.createSpeciality(payload);

  sendResponse(res, {
    httpResponse: 201,
    success: true,
    message: "Speciality has created successfully",
    data: result,
  });
});

const getAllSpecialities = catchAsync(async (req: Request, res: Response) => {
  const result = await specialityService.getAllSpecialities();
  sendResponse(res, {
    httpResponse: 200,
    success: true,
    message: "Fetch Specialities Successfully",
    data: result,
  });
});

const deleteSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialityService.deleteSpeciality(id as string);

  sendResponse(res, {
    httpResponse: 201,
    success: true,
    message: "Delete speciality Successfully",
    data: result,
  });
});

const updateSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialityService.updateSpeciality(
    id as string,
    req.body,
  );

  sendResponse(res, {
    httpResponse: 200,
    success: true,
    message: "Successfully update speciality",
    data: result,
  });
});

export const specialityController = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality,
};
