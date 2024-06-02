import type { IEmployee } from "@/models/IEmployee";
import type { IEmployeeResponse } from "../models/IEmployeeResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://reqres.in/api/users";

export const getEmployees = async (
  page: number
): Promise<{ data: IEmployee[]; totalPages: number }> => {
  const response = await get<IEmployeeResponse>(`${BASE_URL}?page=${page}`);
  console.log(response);
  return {
    data: response.data,
    totalPages: response.total_pages,
  };
};
