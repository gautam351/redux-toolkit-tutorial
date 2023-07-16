import { useSelector } from "react-redux";


const Random=()=>{
    const {no}=useSelector((state)=>state.random)
    return (
       <div className="random">
           <h3>{no===null?"Nothing to Show":no}</h3>
       </div>
    );
}

export default Random;