import type { IEmployee } from "./IEmployee";

export interface IEmployeeResponse {
  data: IEmployee[];
  total_pages: number;
}
