"use client";

import Content from "@/Lib/content";
import Link from "next/link";
import React from "react";

const Chip = ({ label, className }: any) => {
  return (
    <div
      className={`rounded px-3 pt-2 h-10 m-2 items-center inline-block ${className}`}
    >
      <span className="">{label}</span>
    </div>
  );
};

export default function HomeSkillsSection() {
  return (
    <>
      <div
        id="skills-section"
        className="p-2 w-full flex flex-wrap items-stretch"
      >
        <div className=" flex-grow-0 basis-full px-10 font-customFont">
          <h3 className="txt-lg mb-8 text-gray-800 dark:text-gray-100 font-bold">
            My{" "}
            <span className="text-custom-purple dark:text-custom-blue">
              Skills
            </span>
          </h3>
          <h4 className="text-2xl font-bold mb-8">
            Languages, Frameworks & Tools
          </h4>
          <div className="container mb-8">
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
          <h4 className="text-2xl font-bold mb-8">Package Managers</h4>
          <div className="container mb-8">
            {Content.packageManagers.map((item, index) => {
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
          <h4 className="text-2xl font-bold mb-8">Project Management</h4>
          <div className="container mb-8">
            {Content.projectManagement.map((item, index) => {
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
          <h4 className="text-2xl font-bold mb-8">
            DevOps and Cloud Computing
          </h4>
          <div className="container mb-8">
            {Content.devOpsCloud.map((item, index) => {
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
          <p className=" text-base font-bold mt-8">
            You can check out some of{" "}
            <a
              href="https://www.linkedin.com/in/chandusadda/"
              className="text-custom-purple dark:text-custom-blue underline decoration-wavy"
              target="_blank"
              rel="noreferrer"
            >
              my work
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline decoration-wavy text-custom-purple dark:text-custom-blue">
              get in touch
            </Link>{" "}
            with me.
          </p>
        </div>
      </div>
    </>
  );
}
