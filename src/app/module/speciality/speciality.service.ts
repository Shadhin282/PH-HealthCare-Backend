import { Speciality } from "../../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
  const result = await prisma.speciality.create({
    data: payload,
  });
  return result;
};

const getAllSpecialities = async (): Promise<Speciality[]> => {
  const result = await prisma.speciality.findMany();
  return result;
};

const deleteSpeciality = async (id: string): Promise<Speciality> => {
  const result = await prisma.speciality.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateSpeciality = async (
  id: string,
  payload: Speciality,
): Promise<Speciality> => {
  const result = await prisma.speciality.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const specialityService = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality,
};
