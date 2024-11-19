import GeneralButton from "../Buttons/ButtonGeneral";
import Image from "next/image";
import Navbar from "../Navbar";
import TypingEffect from "../TypingEffect";
import Styles from "@/app/components/Styles/Herosec.module.css";

export default function MainSection() {
  return (
    <>
      <Navbar />
      <div id="hero" className={Styles.div}>
        <span className={Styles.span}>
          <TypingEffect />
          <p className={Styles.p}>
            Hey there! I’m Muhammad Ahmed Khurram, a 16-year-old
            <br /> engineer, problem-solver, and innovator. I’m on a mission to
            <br /> lead and reshape the future of technology by creating
            impactful
            <br />
            solutions, especially in the realm of Artificial Intelligence. With
            <br /> a passion for Full-Stack Engineering and AI, I strive to
            drive global
            <br /> advancements and empower industries with smarter solutions.
          </p>

          <p className={Styles.pp}>
            Hey there! I’m Muhammad Ahmed Khurram, a 16-year-old engineer,
            problem-solver, and innovator. I’m on a mission to lead and reshape
            the future of technology by creating impactful solutions, especially
            in the realm of AI. With a passion for Full-Stack Engineering and
            AI, I strive to drive global advancements and empower industries
            with smarter solutions.
          </p>

          <p className={Styles.Secondp}>
            Let’s connect and build the next big thing together!
          </p>

          <p className={Styles.Thirdp}>
            <a href="#contact" className={Styles.a}>
              <GeneralButton title="Request Help" />
            </a>
          </p>
        </span>

        <div></div>
        <Image
          src="/coder.png"
          alt="An Image"
          width={650}
          height={650}
          className={Styles.image}
        />
      </div>
      <div id="skills"></div>
    </>
  );
}
