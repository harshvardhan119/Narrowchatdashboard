import { useState } from "react";
import SvgComponent1 from "./group";
import SvgComponent2 from "./group1";
import SvgComponent3 from "./group2";
import './working.css'
import Blob1 from "./Blob";

function Working(){
    const [opacity1,setopacity1] = useState(1);
    const [opacity3,setopacity3] = useState(0);
    const [opacity2,setopacity2] = useState(0);
    function how(){
        setopacity1(1)
        setopacity2(0)
        setopacity3(0)
    }
    function how1(){
        setopacity1(0)
        setopacity2(1)
        setopacity3(0)
    }
    function how2(){
        setopacity1(0)
        setopacity2(0)
        setopacity3(1)
    }

    return(
        <div className="workstart">
            <div className="right">
            <SvgComponent1 style={{position: "relative",  top: "118px",  left: "2px",opacity:opacity1}}/>
            <SvgComponent2 style={{position: "relative",  top: "-386px",  left: "0px",opacity:opacity2}}/>
            <SvgComponent3 style={{position: "relative",  top: "-944px",  left: "-27px",opacity:opacity3}}/>
            </div>
            <div className="left">
                <div className="first1" onClick={()=>how()}><p style={{marginTop:"68px"}}>Talk With Agnts</p></div>
                <div className="second2"  onClick={()=>how1()}><p style={{marginTop:"68px"}}>Talk With Expert </p></div>
                <div className="third3"  onClick={()=>how2()}><p style={{marginTop:"68px"}}>Learn from genius </p></div>
                {/* <Blob1/> */}
            </div>
            


        </div>
    )
}
export default Working;