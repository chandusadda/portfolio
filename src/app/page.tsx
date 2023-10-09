"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import ChanduSadda from "@/Assets/chandu_pic.jpg";

export default function Home() {
  return (
    <div className="py-20 px-10">
      <div className="p-2 w-full flex flex-wrap items-stretch">
        <div className=" flex-grow-0 basis-1/2 pl-32">
          <h3 className="text-5xl mb-5 text-gray-800 dark:text-gray-100 font-light">
            Hey!
          </h3>
          <h3 className="text-5xl mb-5 text-gray-800 dark:text-gray-100 font-bold">
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
        <div className=" flex-grow-0 basis-1/2">
          <Image
            src={ChanduSadda?.src}
            alt="Chandu Sadda"
            className={" h-96 w-8/12"}
            draggable="false"
            width="500"
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
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </div>
  );
}
