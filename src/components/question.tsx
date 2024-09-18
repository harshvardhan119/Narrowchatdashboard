import { useState } from 'react'
import './Question.css'
import { FaPlus } from 'react-icons/fa'








function Question(){

   

    function hi1(){
      
       
      if(display1==="flex"){
        setdisplay1("none")
       
      }
      else{setdisplay1("flex")
      }
    
    }



function hi2(){
      
 
   
  if(display2==="flex"){
    setdisplay2("none")
  
  }
  else{setdisplay2("flex")
  
}}





    function hi3(){
       
           
          if(display3==="flex"){
            setdisplay3("none")
           
          }
          else{setdisplay3("flex")
          
        }}




        function hi4(){
      
          
                
              if(display4==="flex"){
                setdisplay4("none")
              
              }
              else{setdisplay4("flex")
                    
            }}





            function hi5(){
                
                    
                  if(display5==="flex"){
                    setdisplay5("none")
                   
                  }
                  else{setdisplay5("flex")
                  
                }




    }
    const [display1,setdisplay1] =useState("none");
    
    const [display2,setdisplay2] =useState("none"); 
    const [display3,setdisplay3] =useState("none");
     const [display4,setdisplay4] =useState("none");
      const [display5,setdisplay5] =useState("none");
  



    return(
        <div className="questions" >
       <p id='qh'><b>Frequently asked questions?<FaPlus id='plus' /></b></p>
            <div className="q1" onClick={() =>{hi1();}}>What is Narrow Chat ai?<FaPlus id='plus' onClick={() =>{hi1();}}/><div id ="a1" style={{display:display1,}} >Narrow Chat is an innovative platform that offers a dynamic and engaging experience in the world of artificial intelligence-driven conversations. At its core, Narrow Chat is home to "Chai Bot," your personal AI chat companion. Chai Bot is not just an ordinary chatbot; it's a highly advanced AI entity designed to engage and enlighten users through interactive conversations.</div><hr style={{opacity:"0.3",marginTop:"30px"}}/></div>





            <div className="q2" onClick={() =>{hi2();}}>Is Narrow Chat AI Safe?<FaPlus id='plus' onClick={() =>{hi2();}}/><div id ="a2" style={{display:display2,}}>Narrow Chat strives to provide a safe and enjoyable experience for users, but like any online platform, users should remain vigilant and use it responsibly.</div><hr style={{opacity:"0.3",marginTop:"30px"}}/></div>


            
            <div className="q3" onClick={() =>{{hi3();}}}>Is Narrow Chat AI Free?<FaPlus id='plus' onClick={() =>{{hi3();}}}/><div id="a3" style={{display:display3,}}>Narrow Chat is committed to safety and offers a safe environment for users through content filtering, user reporting mechanisms, and privacy safeguards. It prioritizes user security by preventing the generation of harmful content and addressing inappropriate behavior promptly. While Narrow Chat provides free access to its AI chat services, it may offer premium features or subscriptions for more advanced functionalities. Users can enjoy a basic level of interaction with Chai Bot for free, but additional features or services might come at a cost. It's essential to check Narrow Chat specific pricing model to understand the extent of free and premium offerings.</div><hr style={{opacity:"0.3",marginTop:"30px"}}/></div>
            
            <div className="q4" onClick={() =>{hi4();}}>Can Narrow Chat AI see your chats?<FaPlus id='plus1' onClick={() =>{hi4();}}/><div id ="a4" style={{display:display4,}}>No, Narrow Chat does not have the capability to see or access your chats. Narrow Chat is designed with user privacy in mind and operates under strict privacy guidelines. Conversations with Narrow Chat Bot are processed in a way that ensures user data remains confidential. The platform does not store or analyze personal information shared during chats. Narrow Chat primary function is to provide responsive and engaging AI-driven conversations while respecting user privacy and data security. It is important to use AI platforms responsibly and avoid sharing sensitive personal information, but rest assured that Narrow Chat does not have the ability to view or access your chats.</div><hr style={{opacity:"0.3",marginTop:"30px"}}/></div>
            
            
            <div className="q5" onClick={() =>{ hi5();}}>Does Narrow Chat AI have a website?<FaPlus id='plus2' onClick={() =>{ hi5();}}/><div id="a5" style={{display:display5,}}>You can visit our website to learn more about their AI chat bot services, explore features, and access their platform for AI-driven conversations. Narrow Chat website typically provides information about their offerings, pricing models, and contact details for support or inquiries.</div><hr style={{opacity:"0.3",marginTop:"30px"}}/></div>
        </div>
    )
}

export default Question