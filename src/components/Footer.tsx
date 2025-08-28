"use client";

import React from "react";

const FooterComp = () => {

    return (
        <footer className="w-full text-center bottom-0 relative">
            <div className="w-full container p-4 mb-5 mx-auto">
            Developed by{" "}
              <a
                href="https://www.linkedin.com/in/chandusadda/"
                className=" text-purple-900 underline decoration-wavy dark:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                Chandu Sadda
              </a>
            </div>
        </footer>
    )

}

export default FooterComp;