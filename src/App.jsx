import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";

const App = () => {
  const [btnContent, setBtnContent] = useState("Explore Ideas");

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className={styles.main}>
      {/* navigation */}
      <div className={styles.navigation}>
        <p>experience</p>
        <p>showreel</p>
      </div>
      {/* gallery */}
      <div className={styles.gallery_wrapper}>
        <div className={`${styles.gallery_container} ${styles.order}`}>
          <div className={`${styles.img} ${styles.reorder}`}>
            <img src={img1} alt="img" />
          </div>
          <div className={`${styles.img} ${styles.reorder}`}>
            <img src={img2} alt="img" />
          </div>
          <div className={`${styles.img} ${styles.reorder}`}>
            <img src={img3} alt="img" />
          </div>
          <div className={`${styles.img} ${styles.reorder}`}>
            <img src={img4} alt="img" />
          </div>
        </div>
      </div>
      {/* hero */}
      <div className={styles.hero}>
        <p>Near Future</p>
        <p>embrace and explore the future of web and design</p>
      </div>
      {/* btn */}
      <div className={styles.btn}>{btnContent}</div>
      {/* footer */}
      <div className={styles.footer}>
        <p>English</p>
        <p>View content</p>
      </div>
    </div>
  );
};

export default App;
