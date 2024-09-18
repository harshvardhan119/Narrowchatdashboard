
import './App.css';
import Navbar from './components/Navbar';
import Head from './components/head';
import Cursor from './components/cursor';
import {motion} from 'framer-motion'
import Footer from './components/footer';
import Narrowfoot from './components/narrowfoot';
import { ReactComponent } from './components/image32Svg';
import {Gradient} from './components/background gradient';
import CompanySlider from './components/comanyslider';
import Nfeature from './components/Nfeature';
import Question from './components/question';
import Working from './components/Working';



function App() {
  const{x,y}=Cursor();
 
  return (
   <div className="main">
    <motion.div className="cursor" initial = {{x ,y}}
     animate={{x,y}}
     transition={{
        
        delay:0
     }}></motion.div>
     <Navbar/>
    <div className="content">
   <div className="grad">
   <Gradient /></div><Head/>
   <p style={{fontSize:"25px", position:"relative", top:"-245px", left:"40px", color:"yellow"}}>"Imagine a world where the wisdom of books could be distilled <br></br><p style={{position:"relative",left:"50px",top:"-30px"}}>into an intelligent conversation Now you can create it."</p></p>
   
  
     <Footer/>
   <motion.div className="robo"animate={{y:[-30,0,-30]}}
   transition={{
    times:[0,.2],duration:5,repeat:Infinity,type:"keyframes",ease:"easeInOut"
   }}> 
     <ReactComponent/></motion.div>
    
      <button id='bu'><span>Let's Start</span></button>
     </div>

     <div className="features">
      <p id='head1' style={{
        color:" rgba(255, 255, 255, 0.68)"
      }}>The companies with whom Narrow Chat want to work -</p>
      <CompanySlider/>
      <div className="change" >
      <div className='feature' >
        <p className='hw'><b style={{fontSize:"45px"}}>Explore the Future of Ai with Narrow Chat</b></p>
        
        <p style={{position:"relative",color:"black",top:"-20px",left:"90px"}}>More than just words on a page, your books can become<br></br> <p style={{position:"relative",left:"30px",top:"-40px"}}>interactive guides, mentors, and companions.</p></p>
        </div></div>
          <Nfeature />
     </div>
    <Working  />
   
     <Question/>
      <div className="Narrowfo">
     <Narrowfoot/></div>
     
    </div>
  );
}

export default App;
