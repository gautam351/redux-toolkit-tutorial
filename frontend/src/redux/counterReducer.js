import {createReducer} from "@reduxjs/toolkit";
const initialState={
    c:0
};

export const counterReducer=createReducer(initialState,{
    increment:(state,action)=>{
        state.c+=action.payload
    },
    decrement:(state,action)=>{
        state.c-=action.payload
    }
});