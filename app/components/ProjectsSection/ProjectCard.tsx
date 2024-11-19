import Image from "next/image";
import { Card } from "../../types/propsType";
import styles from "@/app/components/Styles/ProjectCard.module.css";

export default function ProjectCard(props: Card) {
  return (
    <div id="projects" className={styles.cardDiv}>
      <div className={styles.div}>
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive"
          width={200}
          height={12.5}
          objectFit="contain"
        />
      </div>
      <div className={styles.Seconddiv}>
        <h3 className={styles.h3}>{props.title}</h3>
        <p className={styles.p}>{props.description}</p>
      </div>
    </div>
  );
}
