import { Response } from "express";

interface IResponseData<T> {
  httpResponse: number;
  success: boolean;
  message: string;
  data?: T;
}

const sendResponse = <T>(res: Response, responseData: IResponseData<T>) => {
  const { httpResponse, success, message, data } = responseData;

  res.status(httpResponse).json({
    success,
    message,
    data,
  });
};

export default sendResponse;