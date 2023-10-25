"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import ChanduSadda from "@/Assets/my-new-dp2.jpg";

export default function HomeHeadSection() {
  return (
    <>
      <div className="p-2 w-full flex flex-wrap items-stretch">
        <div className=" flex-grow-0 md:basis-1/2 sm:basis-full mt-10">
          <h3 className="txt-lg mb-5 text-gray-800 dark:text-gray-100 font-light">
            Hey!
          </h3>
          <h3 className="txt-lg mb-5 text-gray-800 dark:text-gray-100 font-bold">
            I&apos;m{" "}
            <span className="text-custom-purple dark:text-custom-blue">
              Chandu.
            </span>
          </h3>
          <h5 className="text-xl mb-10">
            <Typewriter
              options={{
                strings: [
                  "I plan, strategise, manage and execute large-scale projects.",
                  "I write code and develop pixel perfect applications.",
                  "Empathic listener & persuasive speaker, influencing, leading & delegating abilities.",
                  "I can help your product get users and a product-market fit.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h5>
          <Link href="/contact">
            <button className=" mr-7 text-white bg-custom-purple border-custom-purple border-4 hover:border-5 p-3 rounded dark:border-custom-blue dark:bg-custom-blue">
              Get In Touch
            </button>
          </Link>
          <button>
            <a
              target="_blank"
              href={`https://drive.google.com/file/d/1AT4tLPCfpdkYPwJaqwlNRCc0jX2BAYxz/view?usp=sharing`}
              className=" text-custom-purple border-custom-purple border-4 hover:border-5 p-3 rounded border-double dark:border-custom-blue dark:text-custom-blue"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="flex-grow-0 md:basis-1/2 sm:basis-full mt-12 mx-auto">
          <Image
            src={ChanduSadda?.src}
            alt="Chandu Sadda"
            className={"mx-auto h-96 w-[60%]"}
            draggable="false"
            width="400"
            height="400"
            priority={false}
          />
        </div>
      </div>
      <span className="scroll-btn mt-24 block m-auto text-center">
        <a
          href="#about-section"
          className=" flex justify-center"
          onClick={(e) => {
            let whereTo = document.getElementById("about-section");
            e.preventDefault();
            whereTo &&
              whereTo.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="mouse relative block w-9 h-14 rounded-3xl border-2 border-solid border-black dark:border-white mx-auto mb-5">
            <span className=" absolute block w-2 h-2 mt-[-4px] ml-[-4px] mr-0 mb-0 left-1/2 top-1/3 rounded-full bg-black dark:bg-white"></span>
          </span>
        </a>
      </span>
    </>
  );
}
