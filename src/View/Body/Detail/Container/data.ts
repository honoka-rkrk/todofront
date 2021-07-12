export interface DtItemMeta {
  id: number;
  name: string;
}

export interface DtMeta {
  dtMetas: DtItemMeta;
}

export interface DtItemData {
  id: number;
  todoNo: number;
  content: string;
  deadline: number;
  priority: number;
  isComplete: boolean;
}

export interface DtData {
  dtDatas: Array<DtItemData>;
}

export function hexIsDark(hexColor: string): boolean {
  const color = hexColor.substring(1);
  const rgb = parseInt(color, 16);
  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = (rgb >> 0) & 0xff;
  const luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  if (luma < 128) {
    return true;
  } else {
    return false;
  }
}
