import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const {c}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>{c}</h1>
     <Home value={20} />
     
       <button onClick={(e)=>dispatch({type:"generate"})}>random</button>
         </div>
  );
}

export default App;
