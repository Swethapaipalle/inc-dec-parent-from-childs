import { useState } from "react";
import Parent from "./Parent";

const UpButton = ({ handleCount}) => {

  return (
    <div>
      <button onClick={handleCount}>Up</button>
    </div>
  );
};

const DownButton = ({handleCount}) => {

  return (
    <div>
      <button onClick={handleCount}>Down</button>
    </div>
  );
};

export default function App() {
  let [count, setCount] = useState(0);

  let handleCount = (str) => {
    console.log("handleCount", str)

    if(str==="inc"){
      console.log("inc")
      setCount(count+1)
    }else{
      console.log("dec")
      setCount(count-1)
    }
    return
  };
  return (
    <>
    <div className="App" style={{margin:"5px 10px"}}>
      <span>Num: {count}</span>
      <UpButton  handleCount={()=>handleCount("inc")} />
      <DownButton  handleCount={()=>handleCount("dec")} />
    </div>
    <Parent/>
    </>
  );
}