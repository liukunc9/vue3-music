export class StringUtils {
  static isEmpty(val: string): boolean {
    return undefined == val || null == val || "" == val;
  }
}
