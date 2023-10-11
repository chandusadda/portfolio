"use client";

export default function HomeAboutSection() {
  return (
    <>
      <div
        id="about-section"
        className="p-2 w-full flex flex-wrap items-stretch"
      >
        <div className=" flex-grow-0 basis-full px-10 font-customFont">
          <h3 className="text-5xl mb-5 text-gray-800 dark:text-gray-100 font-bold">
            About{" "}
            <span className="text-custom-purple dark:text-custom-blue">Me</span>
          </h3>
          <h5 className="text-xl mb-8">
            Hailing from Tirupati, India, I presently serve as the{" "}
            <b>Lead Engineer</b> at Exium India Pvt Ltd. In this capacity, I am
            responsible for leading a remote UI team comprised of 3 highly
            skilled professionals, each operating from different locations
            within the country.
          </h5>
          <h5 className="text-xl mb-8">
            I began my professional journey as a <b>Software Developer</b>,
            delving into various technical domains until I discovered my true
            passion in <b>Web Development</b>. Driven by an insatiable
            curiosity, I have recently embarked on learning{" "}
            <b>Golang, Docker, Kubernetes</b> & contributing as a{" "}
            <b>full-stack developer</b> over the past few weeks. My present role
            is a source of great enthusiasm for me, as it centers primarily on
            technical expertise while occasionally requiring me to roll up my
            sleeves and demonstrate my technological prowess. I take pride in
            regularly conducting diverse <b>Proof of Concepts (POCs)</b> to
            address intricate use cases, ensuring a seamless transition to
            production.
          </h5>
          <h5 className="text-xl mb-8">
            In my free time, I binge on Netflix and YouTube, listen to songs,
            play cricket, and try new cuisines at local restaurants (foodie at
            heart).
          </h5>
        </div>
      </div>
      <span className="scroll-btn mt-24 block m-auto text-center">
        <a
          href="#about-section"
          className=" flex justify-center"
          onClick={(e) => {
            let whereTo = document.getElementById("skills-section");
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
