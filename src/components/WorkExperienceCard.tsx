import { WorkExpInterface } from "@/Lib/common";
import { Fragment } from "react";
import htmlJsonParser from "html-react-parser";

const WorkExperienceCard = ({ work, indexVal }: WorkExpInterface) => {

  return (
    <Fragment key={indexVal}>
      <div className="work-cards mr-[1.2rem] mb-5 font-customFont shadow-workDarkCards dark:shadow-workDarkCards rounded flex flex-column justify-between">
        <div className="p-4">
          <h4 className="mt-2 font-customFont text-purple-900 dark:text-blue-500 font-light text-2xl">
            {work.company}
          </h4>
          <h5 className="mt-2 font-customFont text-[#9c27b0] font-light text-base">
            {work.role}
          </h5>
          <h5 className="mt-2 font-customFont text-gray-500 dark:text-gray-300 font-light text-sm">
            {work.duration}
          </h5>
          {work.description.map((line, index) => {
            const embed = htmlJsonParser(line);
            return (
              <p key={index} className="mt-2 font-light text-base">
                {embed}
              </p>
            );
          })}
          {work.achievements && work.achievements.length > 0 && (
            <>
              <h4 className="mt-2 font-customFont text-purple-900 dark:text-blue-500 font-light text-2xl">
                {`Achievements`}
              </h4>
              {work.achievements.map((line, index) => {
                const embed = htmlJsonParser(line);
                return (
                  <p key={index} className="mt-2 font-light text-base">
                    {embed}
                  </p>
                );
              })}
            </>
          )}
          {work.link && (
            <button>
              <a
                target="_blank"
                href={work.link}
                className="text-purple-900 border-purple-900 mt-8 border-4 hover:border-5 p-3 rounded border-double float-right dark:border-blue-500 dark:text-blue-500"
              >
                View Website
              </a>
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default WorkExperienceCard;
