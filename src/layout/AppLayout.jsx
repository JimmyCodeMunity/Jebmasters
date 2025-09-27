import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll } from "motion/react"

const AppLayout = ({ children, bgtransparent }) => {
  const { scrollYProgress } = useScroll()
  console.log("progress",scrollYProgress)
  return (
    <div className="w-full bg-transparent">
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#F97316",
                    // increase z index
                    zIndex: 1000,
                }}
            />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
