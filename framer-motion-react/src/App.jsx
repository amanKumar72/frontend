import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-screen h-screen">
      {/* <motion.div
        className="w-60 h-60 bg-red-500 "
        initial={{
          x: 0,
          y: 0,
        }}
        animate={{
          x: [0, 1000, 1000, 0, 0],
          y: [0, 0, 500, 500, 0],
          rotate: [0, 90, 180, 270, 360],
          transition: {
            duration: 2,
            delay: 1,
            ease: "anticipate",
            bounce: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          },
        }}
      >
        {" "}
        animate
      </motion.div> */}
      {/* <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          backgroundColor: "#0ff",
        }}
        className=" bg-[#fa0] px-4 py-2 rounded-md text-lg"
      >
        click
      </motion.button>
      <motion.div
        drag
        dragMomentum={{
          enabled: false,
        }}
        dragConstraints={{
          top: 0,
          bottom: 500,
          left: 0,
          right: 1000,
        }}
        whileDrag={{
          scale: 1.2,
        }}
        className="w-60 h-60 bg-red-500"
      ></motion.div> */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
        }}
        className="w-full h-3 origin-left fixed top-0 left-0 rounded bg-red-500"        
      >
      </motion.div>
      <motion.div 
        className="flex flex-col items-center text-center px-5 mx-2 gap-5 py-2  " >
        
      <h1 className="text-2xl">Hello everyone</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          placeat doloremque laborum officiis. Provident tempore nostrum dicta
          praesentium exercitationem, libero magni, tenetur temporibus culpa
          perspiciatis quae deserunt, vitae sunt.
        </p>
      </motion.div>
    </div>
  );
};

export default App;
