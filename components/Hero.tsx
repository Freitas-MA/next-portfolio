import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import imgProfile from "../public/imgProfile.jpg";

type Props = {};

import Image from "next/image";
import Link from "next/link";

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Marcos Freitas",
      "Web Developer",
      "Front-end",
      "ReactJS",
      "Back-end",
      "Next.js",
      "Marcos Freitas",
    ],
    loop: 1,
    deleteSpeed: 50,
    typeSpeed: 50,
    delaySpeed: 1000,
    
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative translate-y-2 w-32 h-32 rounded-full mx-auto"
        src="https://portfolio-sepia-eight-67.vercel.app/assets/programer-07f91d62.gif"
        alt="profile"
      />
      <div className="z-10">
        <h2 className="text-gray-500 uppercase tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 text-white">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="z-10 pt-5">
        <Link href='#about'>
        <button className="heroButton mx-2">About</button>
        </Link>
        <Link href='#experience'>
        <button className="heroButton mx-2">Experience</button>
        </Link>
        <Link href='#skills'>
        <button className="heroButton mx-2">Skills</button>
        </Link>
        <Link href='#projects'>
        <button className="heroButton mx-2">Projects</button>
        </Link>
        <Link href='#contact'>
        <button className="heroButton mx-2">Contact</button>
        </Link>
      </div>
    </div>
  );
}
