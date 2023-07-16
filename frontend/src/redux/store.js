import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./counterReducer";
import { generateRandomReducer } from "./generateRandomReducer";

const store=configureStore({
    reducer:{
        counter:counterReducer,
        random:generateRandomReducer
    }
})

export default store;