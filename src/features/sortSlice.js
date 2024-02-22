import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    bank: [],
    odds: [],
    evens: []
};

const sortSlice = createSlice({
    name: "slice",
    initialState,
    reducers : {
        addNumber: (state, {payload:{nums}}) => {
            for(const num of nums)
                state.bank.push(num);
        },
        sort1: (state) => {
            const num = state.bank.shift();
            num % 2 === 0 ? state.evens.push(num) : state.odds.push(num);
        },
        sortAll: (state) => {
            while(state.bank.length != 0) {
                const num = state.bank.shift();
                num % 2 === 0 ? state.evens.push(num) : state.odds.push(num);
            }
        }
    }
});

export const { addNumber, sort1, sortAll } = sortSlice.actions;

export const selectBank = (state) => state.slice.bank;
export const selectOdds = (state) => state.slice.odds;
export const selectEvens = (state) => state.slice.evens;

export default sortSlice.reducer;