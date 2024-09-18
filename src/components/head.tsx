import './head.css';
import {motion} from 'framer-motion'






function Head() {

    return (
        
      <motion.div
       >
        <motion.div className="head"initial = {{opacity:0}}
     animate={{opacity:1}}
     transition={{
        duration:3,
        delay:1
     }}>
        
        Welcome to Era of AI</motion.div>
      </motion.div>



    );
  }
  
  export default Head;
  