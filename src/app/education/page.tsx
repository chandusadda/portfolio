import ChanduSadda from "@/Assets/chandu_selfe.jpg";
import Image from "next/image";
import Content from "@/Lib/content";

export default function Education() {
  return (
    <div className="pt-4 mb-10 pb-2">
      <div className=" py-5 px-5 flex flex-col items-start mt-17 md:ml-10 justify-center">
        <h3 className="txt-lg mb-7 text-center text-gray-800 dark:text-gray-100 font-bold">
          Education{" "}
        </h3>
        <div className=" w-full mt-12">
          {/* <div className=" flex-grow-0 md:basis-1/4 sm:basis-full"> */}
            <Image
              src={ChanduSadda?.src}
              alt="Chandu Sadda"
              className={"ml-auto rounded-xl h-72 w-80 education-img"}
              draggable="false"
              width={250}
              height={300}
            />
          {/* </div> */}
          <div className="flex education-details mt-20">
            <div className=" w-64 text-end p-5">
              <h6 className="text-xl"> {Content.education.ug.type}</h6>
              <h6 className=" font-extralight text-lg">
                {Content.education.ug.duration}
              </h6>
            </div>
            <div className=" flex-[0_1_0%]">
              <span className="testcl1 p-1 my-3 mt-7 shadow-dot flex border-solid border-transparent border-2 rounded-full bg-custom-purple dark:bg-custom-blue"></span>
              <span className="bg-gray-400 h-14 block w-[2px] ml-[0.3rem]"></span>
            </div>
            <div className=" text-center p-5">
              <h6 className="text-xl"> {Content.education.ug.name}</h6>
              <h6 className=" font-extralight text-lg">
                {Content.education.ug.college}
              </h6>
              <h6 className=" font-extralight text-lg">
                {Content.education.ug.course}
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl"> Do I depend solely on books? 📚</h3>
          <p className="mt-3 font-customFont font-light text-base">
            My learning is not limited to the academic institutions I&apos;ve
            been to. I believe in practical learning and take up tasks in new
            domains. I learn how to complete a task and hence learn my way up to
            mastering that domain.
          </p>
          <p className="mt-3 font-customFont font-light text-base">
            I prefer grasping an unfamiliar concept through blog posts or
            examples which is why whenever I want to learn something technical,
            I explore Medium Blogs, Stack Overflow or GitHub repositories for
            better understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
