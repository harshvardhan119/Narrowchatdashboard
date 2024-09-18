import { FaThumbsUp,FaRobot,FaLockOpen  } from "react-icons/fa";
import { IoIosPeople,IoMdChatboxes } from "react-icons/io";
import { BsRobot } from "react-icons/bs";
import './Nfeature.css'







function Nfeature(){


return(
    <div className="f1">
        <div className="m1">
        <div className="c1"><FaThumbsUp style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}}/><b style={{color:"black"}}>Unleash Your Imagination</b><br/>
            <p style={{margin:"20px",textAlign:"center"}}>You have the freedom to craft unique and compelling characters.</p></div>
        <div className="c2"><IoIosPeople style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}}/><b style={{color:"black"}}>Craft Characters with Ease</b><br/>
        <p style={{margin:"20px",textAlign:"center"}}>Customize appearances, voices, and behavior effortlessly, ensuring your characters are as diverse and dynamic as your imagination allows</p></div>
        <div className="c3"><FaRobot style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}}/><b style={{color:"black"}}>Seamless Integration</b><br/>
        <p style={{margin:"20px",textAlign:"center"}}>Engage in captivating conversations, embark on adventures, or simply have a chat - it's all at your fingertips</p></div></div>
        <div className="m2">
        <div className="c4"><IoMdChatboxes style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}} /><b style={{color:"black"}}>Expressive Conversations</b><br/>
        <p style={{margin:"20px",textAlign:"center"}}>Engage in dialogues that feel natural and dynamic. Your characters respond with nuance, making every interaction unique and engaging.</p></div>
        <div className="c5"><FaLockOpen style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}}/><b style={{color:"black"}}>Unlock New Possibilities</b><br/>
        <p style={{margin:"20px",textAlign:"center"}}>Chai is your gateway to a revolutionary AI chat experience.</p></div>
        <div className="c6"><BsRobot style={{fontSize: "40px",color:"white",margin:"30px",marginRight:"25px"}}/><b style={{color:"black"}}>Interactive Storytelling</b><br/>
        <p style={{margin:"20px",textAlign:"center"}}>Elevate your storytelling to new heights. Use Narrow Chat's Character AI to create interactive narratives where your characters guide users through immersive adventures.</p></div></div>
    </div>
)


}


export default Nfeature;