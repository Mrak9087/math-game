import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IGame {
    category:string;
    difficulty:number;
}

export const initialStateGame: IGame = {
    category:'dragons',
    difficulty:4,
}

export const gameSlice = createSlice({
    name:'mathGame',
    initialState:initialStateGame,
    reducers: {
        setCategory(state, action:PayloadAction<string>) {
            state.category = action.payload;
        },
        setDiff(state, action:PayloadAction<number>) {
            state.difficulty = action.payload;
        }
    }
})

export const {setDiff, setCategory} = gameSlice.actions;

export default gameSlice.reducer;