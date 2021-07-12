export interface PjItemMeta {
  id: number; //id
  deadline: number; //締切日
  name: string; //プロジェクト名
  isComplete: boolean; //完了済みか
  memo: string; //メモ
  order: number; //昇順(1)か降順(2)か
  orderBy: number; //何を並び替えるか(0):選択なし(1):deadline,(2):priority
}

export interface PjMeta {
  pjMetas: Array<PjItemMeta>;
}
