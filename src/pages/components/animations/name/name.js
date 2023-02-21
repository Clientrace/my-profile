
import { useState } from "react";
import { useInterval } from "../../../../helper/delta-timer";
import { motion } from 'framer-motion';

const Name = () => {
  const fullname = 
    ["K","i","m"," ",
     "C","l","a","r","e","n","c","e"," ",
     "P","e","ñ","a","f","l","o","r"];
  const [bleep, setBleep] = useState(false);
  const [speed, setSpeed] = useState(400);
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
  }, speed)

  return <>
    { name.map(el=>{
      return <>{el}</>
    }) }
  </>
}

export default Name;


