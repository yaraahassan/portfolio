"use client";
import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



export default function HomePage() {

useEffect(()=>{
  AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
  anchorPlacement:"top-bottom"      })

  },[])
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>

    </>
  );
}
