import MicrosoftSvgComponent from './companysvg/microsoft'
import './companyslider.css'
import OpenaiSvgComponent from './companysvg/openai';
import MetaSvgComponent from './companysvg/metalogo';
import ScaleaiSvgComponent from './companysvg/scaleai';
import NvidiaSvgComponent from './companysvg/nvidia';
import {easeIn, easeInOut, motion} from 'framer-motion';
import { useEffect, useState } from 'react';

function CompanySlider(){
      const [opacity,setopacity] = useState(1);
      const [opacity1,setopacity1] = useState(0);
      useEffect(()=>{const intervalId= setInterval(()=>{ opacity?setopacity(0):setopacity(1);
         opacity1?setopacity1(0):setopacity1(1); 
       },6000);
       return () => clearInterval(intervalId); 
            },[opacity,opacity1])
      
    


 
    return(
        <div className="cs">
             
        <motion.div id='companylogo1' animate={{opacity:opacity}} transition={{ease:"easeInOut", duration:3}}><b>Charachter Ai</b></motion.div>
        <motion.div  id='companylogo2'animate={{opacity:opacity1}} transition={{ease:"easeInOut", duration:2}} ><b>Adept</b></motion.div>
        <motion.div  id='companylogo3' animate={{opacity:opacity}} transition={{ease:"easeInOut", duration:3}}><b>cohere</b></motion.div>
        <motion.div  id='companylogo4' animate={{opacity:opacity1}} transition={{ease:"easeInOut", duration:2}}><OpenaiSvgComponent id='companylogos'style={{top: "63px",
  left: "-80px"}}/><div>Open Ai</div></motion.div>
        <motion.div  id='companylogo5'  animate={{opacity:opacity}} transition={{ease:"easeInOut", duration:3}}><MicrosoftSvgComponent /></motion.div>
        <motion.div  id='companylogo6'  animate={{opacity:opacity1}} transition={{ease:"easeInOut", duration:2}}><MetaSvgComponent id='companylogos'style={{left: "-65px",
  position: "relative",top:"75px"}}/><div >Meta</div></motion.div>
        <motion.div  id='companylogo7' animate={{opacity:opacity}} transition={{ease:"easeInOut", duration:3}}><NvidiaSvgComponent /></motion.div>
        <motion.div  id='companylogo8'  animate={{opacity:opacity1}} transition={{ease:"easeInOut", duration:2}}><ScaleaiSvgComponent /></motion.div>
     

        </div>
    )
}
export default CompanySlider;