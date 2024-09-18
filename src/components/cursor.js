import React , { useEffect, useState } from 'react'


function Cursor(){
    
const  [position,setposition] = useState({x:0 ,y:0});
useEffect(()=>{ const mousepos = (event)=>{setposition ({x:event.pageX-30
    ,y:event.pageY-45})}

window.addEventListener('mousemove',mousepos);
     })
   



   return position;
    
};

export default Cursor;