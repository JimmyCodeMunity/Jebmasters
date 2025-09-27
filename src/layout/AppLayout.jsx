import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll } from "motion/react"

const AppLayout = ({ children, bgtransparent }) => {
  const { scrollYProgress } = useScroll()
  // get pathname
  const pathname = window.location.pathname;
  console.log("pathname", pathname)
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
            {
              pathname !== "/" ? <Navbar bgtransparent={bgtransparent} /> : null
            }
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
