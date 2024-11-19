import styles from "@/app/components/Styles/EduSec.module.css";

export default function Education() {
  return (
    <>
      <div id="education" className={styles.mainDiv}>
        <h2 className={styles.h2}>Education</h2>

        <div className={styles.div}>
          <div className={styles.lineDiv}></div>

          <div className={styles.boxDiv}>
            <h3 className={styles.h3}>Matriculation in Computer Science</h3>
            <p className={styles.p}>Grade: A</p>
            <p className={styles.p}>Excellence Model School</p>
            <p className={styles.p}>Completed: 2024</p>
          </div>

          <div className={styles.boxDiv}>
            <h3 className={styles.h3}>Governor Sindh IT Initiative</h3>
            <p className={styles.p}>GenAI, Web3.0 & Metaverse</p>
            <p className={styles.p}>Selected from 500,000+ students</p>
            <p className={styles.p}>Current Quarter: Full-Stack Development</p>
          </div>

          <div className={styles.boxDiv}>
            <h3 className={styles.h3}>Intermediate in Computer Science</h3>
            <p className={styles.p}>
              Government Degree Boys College - KMC Store
            </p>
            <p className={styles.p}>Currently Enrolled</p>
            <p className={styles.p}>2024 - Present</p>
          </div>
        </div>
      </div>
    </>
  );
}
