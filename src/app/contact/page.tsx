import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="py-20 px-5 flex flex-col items-start mt-20 justify-center">
      <h3 className="text-5xl mb-7 text-center text-gray-800 dark:text-gray-100 font-bold">
        Get in{" "}
        <span className=" text-custom-purple dark:text-custom-blue">Touch</span>
      </h3>
      <h5 className="text-2xl mb-5 font-light">Primary</h5>
      <div className="flex">
        <a
          href="mailto:chandusadda1992@gmail.com"
          className=" float-left"
          title="mail to"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-6 w-6 text-custom-purple hover:w-8 hover:h-8 dark:text-custom-blue"
          />
        </a>
        <a href="tel:+919989339665" className=" ml-5 float-right">
          <FontAwesomeIcon
            className="h-6 w-6 text-custom-purple hover:w-8 hover:h-8 dark:text-custom-blue"
            icon={faPhone}
          />
        </a>
      </div>

      <h5 className="text-2xl mb-5 mt-6 font-light">Social</h5>
      <div className="flex">
        <a
          href="https://github.com/chandusadda"
          className="mr-5"
          target="_blank"
        >
          <FontAwesomeIcon
            className="h-7 w-7 text-custom-purple hover:w-8 hover:h-8 dark:text-custom-blue"
            icon={faGithub}
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/chandusadda/"
          className="mr-5"
          target="_blank"
        >
          <FontAwesomeIcon
            className="h-7 w-7 text-custom-purple hover:w-8 hover:h-8 dark:text-custom-blue"
            icon={faLinkedin}
          />{" "}
        </a>
        <a href="https://twitter.com/chandu_sadda" target="_blank">
          <FontAwesomeIcon
            className="h-7 w-7 text-custom-purple hover:w-8 hover:h-8 dark:text-custom-blue"
            icon={faTwitter}
          />{" "}
        </a>
      </div>
      <h5 className="text-2xl mb-5 mt-6 font-light">Resume</h5>
      <button>
        <a
          target="_blank"
          href={`https://drive.google.com/file/d/1AT4tLPCfpdkYPwJaqwlNRCc0jX2BAYxz/view?usp=sharing`}
          className=" text-custom-purple border-custom-purple border-4 hover:border-5 p-3 rounded border-double float-right dark:border-custom-blue dark:text-custom-blue"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
}
