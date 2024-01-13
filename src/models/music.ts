export interface IBanner {
  pic: string;
  targetId?: number;
  targetType?: number;
  typeTitle?: string;
  bannerId?: number;
  [propName: string]: any;
}

export interface IDetail {
  code: string; // 图片地址
}