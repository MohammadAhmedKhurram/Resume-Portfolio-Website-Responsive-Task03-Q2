"use client";
import { useEffect, useState } from "react";
import TypeIt from "typeit";
import Styles from "@/app/components/Styles/Herosec.module.css";

export default function TypingEffect() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isAnimated) {
      new TypeIt("#element", {
        lifeLike: false,
        speed: 0,
      })
        .type("F")
        .pause(100)
        .type("u")
        .pause(100)
        .type("t")
        .pause(100)
        .type("u")
        .pause(100)
        .type("r")
        .pause(100)
        .type("e")
        .pause(100)
        .type(" ")
        .pause(100)
        .type('<span style="color: #E74C3C;">F</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">u</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">l</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">l</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">-</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">S</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">t</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">a</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">c</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">k</span>')
        .pause(100)
        .type(" ")
        .pause(100)
        .type('<span style="color: #E74C3C;">E</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">n</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">g</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">i</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">n</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">e</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">e</span>')
        .pause(100)
        .type('<span style="color: #E74C3C;">r</span>')
        .pause(100)
        .type(" ")
        .pause(100)
        .type("a")
        .pause(100)
        .type("n")
        .pause(100)
        .type("d")
        .pause(100)
        .type(" ")
        .pause(100)
        .type('<span style="color: #F1C40F;">A</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">I</span>')
        .pause(100)
        .type(" ")
        .pause(100)
        .type('<span style="color: #F1C40F;">P</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">i</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">o</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">n</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">e</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">e</span>')
        .pause(100)
        .type('<span style="color: #F1C40F;">r</span>')
        .pause(100)
        .type("!")
        .go();
    }
  }, [isAnimated]);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
      <div id="element" className={Styles.TypingEffect}></div>
    </>
  );
}
