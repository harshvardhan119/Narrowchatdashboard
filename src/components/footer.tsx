import {motion} from 'framer-motion';





function Footer() {
return (

      <div className="footer" >
        <motion.div className="N"initial = {{opacity:0,scale:2}}
     animate={{opacity:1,scale:1
    }}
     transition={{
        duration:2,
        delay:0
     }}>
       D
       </motion.div>
       <motion.div className="a"initial = {{opacity:0}}
     animate={{opacity:1
    }}
     transition={{
        duration:1,
        delay:1
     }}>
        r
       </motion.div>
       <motion.div className="r1"initial = {{opacity:0}}
     animate={{opacity:1,
    }}
     transition={{
        duration:1,
        delay:2
     }}>
        e
       </motion.div>
       <motion.div className="r2"initial = {{opacity:0}}
     animate={{opacity:1,
    }}
     transition={{
        duration:1,
        delay:3
     }}>
        a
       </motion.div>
      <motion.div className="o"initial = {{opacity:0}}
     animate={{opacity:1
    }}
     transition={{
        duration:1,
        delay:4
        
     }}
      >
       m
       </motion.div>
       <motion.div className="w"initial = {{opacity:0}}
     animate={{opacity:1
    }}
     transition={{
        duration:3,
        delay:5
     }}>
        f
       </motion.div>
       <motion.div className="c"initial = {{opacity:0,scale:2}}
     animate={{opacity:1,scale:1
    }}
     transition={{
        duration:2,
        delay:6
     }}>
        l
       </motion.div>
       <motion.div className="h"initial = {{opacity:0}}
     animate={{opacity:1
    }}
     transition={{
        duration:3,
        delay:7
     }}>
        o
       </motion.div>
       <motion.div className="a"initial = {{opacity:0}}
     animate={{opacity:1,
    }}
     transition={{
        duration:3,
        delay:8
     }}>
        w
       </motion.div>
       {/* <motion.div className="t"initial = {{opacity:0}}
     animate={{opacity:1,
    }}
     transition={{
        duration:3,
        delay:9
     }}>
        t
       </motion.div>
      */}
         
      </div>
    );
  }
  
  export default Footer;