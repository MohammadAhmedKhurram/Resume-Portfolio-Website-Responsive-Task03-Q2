import GeneralButton from "../Buttons/ButtonGeneral";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Styles from "@/app/components/Styles/ProjectSec.module.css";

export default function ProjectsSection() {
  return (
    <div className={Styles.div}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1 className={Styles.h1}>Projects I&apos;ve Built</h1>
        <p className={Styles.p}>
          I’m dedicated to driving innovation through technology. Below are some
          of my key projects that demonstrate my growing proficiency in
          Full-Stack Engineering.
        </p>
      </div>

      <div className={Styles.mainDiv}>
        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/monster-maze-adventure?activeTab=readme"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/monster (1).png"
              title="Monster Maze Adventure Game"
              description="A CLI game using TypeScript, Node.js, and Inquirer. Navigate a maze, face enemies, and make strategic combat decisions."
            />
          </Link>
        </div>

        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/student-manager-ts"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/std.png"
              title="Student Management System"
              description="A TypeScript CLI tool built with Node.js and Inquirer for managing students and courses, with persistent JSON storage."
            />
          </Link>
        </div>

        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/cli-cashmaster"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/atm.png"
              title="ATM Simulator"
              description="An ATM simulator using TypeScript, Node.js, and Inquirer. Users can log in, check balances, and withdraw cash."
            />
          </Link>
        </div>

        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/quiz_maestro"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/Quiz.jpg"
              title=" Quiz System"
              description="A TypeScript quiz system built with Node.js and Inquirer, offering interactive multiple-choice questions."
            />
          </Link>
        </div>

        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/elementary_calculator"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/calculator.jpg"
              title="Calculator"
              description="A simple TypeScript CLI calculator using Node.js and Inquirer for basic operations like addition, subtraction, multiplication, and division."
            />
          </Link>
        </div>

        <div className={Styles.projectCard}>
          <Link
            href="https://www.npmjs.com/package/smart_currency_converter"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              image="/projectSec.pngs/currencyconverter.jpg"
              title="Currency Converter"
              description="A TypeScript CLI app using Node.js, Axios, and Inquirer to convert currencies with live exchange rates."
            />
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
          paddingTop: "40px",
        }}
      >
        <Link
          href="https://github.com/MohammadAhmedKhurram"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <GeneralButton title="Explore More" />
        </Link>
      </div>
    </div>
  );
}
