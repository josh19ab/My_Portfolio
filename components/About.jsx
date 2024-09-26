import Image from "next/image";

import express from "../assets/express.svg";
import git from "../assets/git.svg";
import mongo from "../assets/mongo.svg";
import node from "../assets/node.svg";
import next from "../assets/next.svg";
import vite from "../assets/vite.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import jo from "../assets/jo.jpg";




const About = () => {
  return (
    <>
      <div className="px-5 xs:px-10 sm:px-12 md:px-24 py-24" id="about">
        <div className="flex items-center gap-3 pb-10 pt-2.5">
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-200 font-inter">
            About Me
          </h3>
          <div className="h-px flex-grow max-w-xs bg-blue-100 dark:bg-blue-900"></div>
        </div>
        <div className="flex gap-20 lg:gap-10 flex-col items-center lg:flex-row">
          <div className="w-full lg:w-3/5">
            <p className="pb-4 text-slate-600 dark:text-slate-400">
              I am a passionate and self-taught Full-Stack Developer residing in
              Wayanad, India. At the age of 21, I have dedicated myself to
              the exciting world of web development and have embarked on a
              journey of constant learning and growth.
            </p>
            <p className="pb-4 text-slate-600 dark:text-slate-400">
              From a young age, I was fascinated by technology and its ability
              to shape the world around us. This curiosity led me to explore
              programming and web development, where I quickly discovered my
              knack for creating dynamic and user-friendly applications.
            </p>
            <p className="pb-4 text-slate-600 dark:text-slate-400">
              As a Full-Stack Developer, I possess a diverse skill set that
              allows me to handle both the frontend and backend aspects of web
              development.
            </p>
          </div>
          <div className="w-full md:w-2/3 lg:w-2/5 ">
            <Image
              src={jo}
              className="rounded-full w-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:-translate-y-1"
            ></Image>
          </div>
        </div>
      </div>
      <div className="px-5 xs:px-10 sm:px-12 md:px-24 flex flex-wrap gap-5 items-center justify-center xl:justify-between ">
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={next}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={react}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={vite}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={node}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={mongo}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={express}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={tailwind}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={python}
            alt="skill"
          ></Image>
        </div>
        <div className=" bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all">
          <Image
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={git}
            alt="skill"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default About;
