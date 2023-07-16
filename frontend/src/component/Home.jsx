import {React} from "react"
import { useDispatch } from "react-redux";
import Random from "./Random";


const Home=({value})=>{
    const dispatch=useDispatch();
    const incCounter=()=>{
        dispatch({
            type:"increment",
            payload:value
        })
    }

    const decCounter=()=>{
        dispatch({
            type:"decrement",
            payload:value
        })
    }

    return (
        <div>
          <button onClick={incCounter} >increase</button>
          <button onClick={decCounter } >decrease</button>
          <Random />
        </div>
    );
}

export default Home;