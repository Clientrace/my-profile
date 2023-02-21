
import { useState } from "react";
import { useInterval } from "../../../../helper/delta-timer";

const Name = ({initSpeed, text, teardown}) => {
  let fullname = [];
  for(var i=0;i<text.length;i++){
    fullname.push(text[i]);
  }
  const [bleep, setBleep] = useState(false);
  const [speed, setSpeed] = useState(initSpeed);
  const [name, setName] = useState([]);

  useInterval(()=>{
    setBleep(!bleep);
  }, 750)

  useInterval(()=>{
    if(name !== fullname){
      const n = [...fullname.splice(0, name.length),"_"];
      setName(n);
    }
    if(name.length > 5){
      setSpeed(100);
    }
    if(name.length === fullname.length){
      if(teardown){
        teardown();
      }
    }
  }, speed)

  return <>
    { name.map((el, idx)=>{
      if(idx == name.length-1){
        return <a style={{opacity: bleep?0:1}}>{el}</a>
      }
      return <>{el}</>
    }) }
  </>
}

export default Name;

