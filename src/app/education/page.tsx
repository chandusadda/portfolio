import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChanduSadda from "@/Assets/chandu_selfe.jpg";
import Image from "next/image";
import Content from "@/Lib/content";

export default function Education() {
  return (
    <div className="py-20 px-5 flex flex-col items-start mt-17 ml-10 justify-center">
      <h3 className="text-5xl mb-7 text-center text-gray-800 dark:text-gray-100 font-bold">
        Education{" "}
      </h3>
      <div className="flex items-center w-full mt-12">
        <div>
          <Image
            src={ChanduSadda?.src}
            alt="Chandu Sadda"
            className={"ml-10 rounded-xl"}
            draggable="false"
            width={250}
            height={300}
          />
        </div>
        <div className="flex">
          <div className=" w-64 text-end p-5">
            <h6 className="text-xl"> {Content.education.ug.type}</h6>
            <h6 className=" font-extralight text-lg">
              {Content.education.ug.duration}
            </h6>
          </div>
          <div className=" flex-[0_1_0%]">
            <span className="testcl1 bg-custom-purple dark:bg-custom-blue"></span>
            <span className="testcl2 "></span>
          </div>
          <div className=" text-center p-5">
            <h6 className="text-xl"> {Content.education.ug.name}</h6>
            <h6 className=" font-extralight text-lg">
              {Content.education.ug.course}
            </h6>
          </div>
        </div>
      </div>

      
    </div>
  );
}
