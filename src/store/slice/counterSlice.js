import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        add(state, action) {
            return state + 1
        },
        sub(state, action) {
            return state - 1
        },
        reset(state, action) {
            return 0
        }
    }
})

export default counterSlice
export const { add, sub, reset } = counterSlice.actions