import React from "react";

const HeaderComp = () => {
  return <header className="header-main fixed top-0 right-0 left-auto px-6 flex flex-auto">
    <div className="font-bold py-4">
      Chandu Sadda
    </div>
    <div className="mr-5 ml-auto">
      <a className="my-4 mx-6 ">Home</a>
      <a className="py-4 mx-6 ">Education</a>
      <a className="py-4 mx-6 ">Work</a>
      <a className="py-4 mx-6 ">Contact</a>

    </div>
  </header>;
};

export default HeaderComp;