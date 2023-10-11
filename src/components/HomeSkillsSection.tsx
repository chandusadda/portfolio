"use client"

import Content from "@/Lib/content";
import React from "react";

const Chip = ({label, className}: any) => {

    return(
        <div className={` rounded px-2 py-1 m-3 items-center inline-block h-8 ${className}`}>
            <span className=" px-3">{label}</span>
        </div>
    )

}

export default function HomeSkillsSection() {
  return (
    <>
      <div id="skills-section" className="p-2 w-full flex flex-wrap items-stretch">
        <div className=" flex-grow-0 basis-full px-10 font-customFont">
          <h3 className="text-5xl mb-8 text-gray-800 dark:text-gray-100 font-bold">
            My{" "}
            <span className="text-custom-purple dark:text-custom-blue">Skills</span>
          </h3>
          <h4 className="text-2xl font-bold mb-8">
            Languages, Frameworks & Tools
          </h4>
          <div className="container">
              {Content.languagesFrameworksTools.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Chip
                      label={item}
                      className={
                        index % 2 === 0
                          ? "bg-custom-purple dark:bg-custom-blue text-white"
                          : " bg-black dark:bg-white text-white dark:text-black"
                      }
                    />
                  </React.Fragment>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
}
