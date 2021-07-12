import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DetailInfo = {
  id: number;
  deadline: number | null;
  name: string;
  isComplete: boolean;
  memo: string;
  order: number;
  orderBy: number;
};

type State = {
  detailInfo: DetailInfo | null;
};

const initialState: State = {
  detailInfo: null
};

const slice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetailInfo: (state, action) => {
      return { detailInfo: action.payload };
    },
    setMemo: (state, action: PayloadAction<string>) => {
      if (state.detailInfo) {
        state.detailInfo.memo = action.payload;
      }
      return state;
    }
  }
});

export default slice.reducer;

export const { setDetailInfo, setMemo } = slice.actions;
