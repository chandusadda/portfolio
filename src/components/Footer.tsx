import React from "react";

const FooterComp = () => {

    return (
        <footer className="w-full text-center">
            <div className="w-full container p-4 mb-5 mx-auto">
            Developed by{" "}
              <a
                href="https://www.linkedin.com/in/chandusadda/"
                className=" text-custom-purple underline decoration-wavy dark:text-custom-blue"
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