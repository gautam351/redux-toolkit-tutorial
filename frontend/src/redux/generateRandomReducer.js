import { createReducer } from "@reduxjs/toolkit";

const initialState={
    no:null
}

export const generateRandomReducer=createReducer(initialState,{
    generate:(state)=>{
     state.no=Math.ceil(Math.random()*1000)
    }
})
