export interface EntityResponse<T> {
  success: boolean;
  msgCode: number;
  message: string;
  model: null | any;
  lstModel: T | null;
  totalRecords: number;
}