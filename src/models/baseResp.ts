export interface IBaseResp<T> {
  code: number;
  data?: T;
  msg?: string;
}
