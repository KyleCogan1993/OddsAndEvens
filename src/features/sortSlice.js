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
        addNumber: (state, {nums}) => {
            nums.forEach(num => {
                state.bank.push(num)
            });
        },
        sort1: (state, {nums}) => {
            const num = nums.pop();
            num % 2 === 0 ? state.evens.push(num) : state.odds.push(num);
        },
        sortAll: (state, {nums}) => {
            while(nums.length != 0) {
            const num = nums.pop();
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