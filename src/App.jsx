import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import LocomotiveScroll from "locomotive-scroll";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";
gsap.registerPlugin(Flip);
gsap.registerPlugin(CustomEase);

const App = () => {
  const [flipped, setFlipped] = useState(false);
  const wrapper = useRef(null);
  const container = useRef(null);
  const img_one = useRef(null);
  const img_two = useRef(null);
  const img_three = useRef(null);
  const img_four = useRef(null);

  const reorder = {
    position: "absolute",
    top: "47.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
    height: "325px",
  };

  const images = [
    img_one.current,
    img_two.current,
    img_three.current,
    img_four.current,
  ];

  useEffect(() => {
    // smooth scroll
    const scroll = new LocomotiveScroll({
      el: wrapper.current,
      smooth: true,
    });
  }, []);

  // animation
  const rotationValues = [10, -5, 2, -2];
  CustomEase.create("cubic", "0.83, 0, 0.17, 1");

  const applyRotation = () => {
    images.forEach((image, index) => {
      const rotation = !flipped ? 0 : rotationValues[index];
      gsap.to(image, {
        rotate: rotation,
        duration: 2,
        ease: "cubic",
        delay: 0.155,
      });
    });
  };

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={styles.main}>
      {/* navigation */}
      <div className={styles.navigation}>
        <p>experience</p>
        <p>showreel</p>
      </div>
      {/* gallery */}
      <div
        ref={wrapper}
        className={styles.gallery_wrapper}
        data-scroll-container
      >
        <div
          ref={container}
          className={`${styles.gallery_container} ${styles.order}`}
          data-scroll
        >
          <div ref={img_one} className={`${styles.img} ${styles.reorder}`}>
            <img src={img1} alt="img" />
          </div>
          <div ref={img_two} className={`${styles.img} ${styles.reorder}`}>
            <img src={img2} alt="img" />
          </div>
          <div ref={img_three} className={`${styles.img} ${styles.reorder}`}>
            <img src={img3} alt="img" />
          </div>
          <div ref={img_four} className={`${styles.img} ${styles.reorder}`}>
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
      <div className={styles.btn} onClick={handleClick}>
        {flipped ? "Hide all Ideas" : "Explore Ideas"}
      </div>
      {/* footer */}
      <div className={styles.footer}>
        <p>English</p>
        <p>View content</p>
      </div>
    </div>
  );
};

export default App;
