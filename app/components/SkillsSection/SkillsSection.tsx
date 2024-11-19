import Image from "next/image";
import Iconstyle from "@/app/components/Styles/Icon.module.css";
import styles from "@/app/components/Styles/SkillsSec.module.css";

export default function Skills() {
  return (
    <>
      <div id="skills" className={styles.div}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 className={styles.h1}>Skills and Expertise</h1>
        </div>
        <div className={styles.p}>
          I am passionately committed to pioneering advancements in technology,
          driven by a desire to innovate and create meaningful solutions. In
          today’s rapidly evolving digital landscape, I am honing essential
          skills that will empower industries and transform challenges into
          opportunities. Here are the key competencies I am developing to shape
          the future of technology and drive impactful change.
        </div>

        <div className={styles.icon}>
          <Image
            className={Iconstyle.icon}
            src="/icons8-html5.svg"
            alt="HTML Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-css3.svg"
            alt="CSS Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-javascript.svg"
            alt="JavaScript Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-typescript.svg"
            alt="TypeScript Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-nodejs.svg"
            alt="Node.js Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-git.svg"
            alt="Git Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-nodejs (1).svg"
            alt="Node.js Icon 2"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-github.svg"
            alt="GitHub Icon"
            width={100}
            height={100}
          />
          <Image
            className={Iconstyle.icon}
            src="/icons8-npm.svg"
            alt="NPM Icon"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
