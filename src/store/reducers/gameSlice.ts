import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGame {
  category: string;
  difficulty: number;
  playingForTime: boolean;
}

export const initialStateGame: IGame = {
  category: 'dragons',
  difficulty: 4,
  playingForTime: false,
};

export const gameSlice = createSlice({
  name: 'mathGame',
  initialState: initialStateGame,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setDiff(state, action: PayloadAction<number>) {
      state.difficulty = action.payload;
    },
    setPlayingForTime(state, action: PayloadAction<boolean>) {
      state.playingForTime = action.payload;
    },
  },
});

export const { setDiff, setCategory, setPlayingForTime } = gameSlice.actions;

export default gameSlice.reducer;
