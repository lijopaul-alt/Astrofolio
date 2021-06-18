import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import classes from "../components/styles/Hero.module.css";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="my-16  px-5 md:my-30 flex flex-col flex-wrap space-y-16 md:space-y-0 py-5  ">
      <div className="max-w-md mb-50 space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">Hello. I’m Lijo </h1>
        <div className={classes.wrapper}>
          <div className={classes.statictxt}>Im a</div>
          <ul className={classes.dynamictxt}>
            <li>
              <span>REACT DEVELOPER</span>
            </li>
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed">
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{" "}
        </p>
        <button className={classes.btn}>
          <a href="https://drive.google.com/file/d/1AphwY6Cu_KgDaP3il-8j-RmJpdpa8BRJ/view?usp=sharing">
            View CV
          </a>
        </button>
      </div>
      <div className={classes.Hero}>
        <div className={classes.Hero} ref={container}></div>
      </div>
    </section>
  );
};

export default Hero;
