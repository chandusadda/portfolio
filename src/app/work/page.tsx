import Content from "@/Lib/content";
import WorkExperienceCards from "@/components/WorkExperienceCard";

export default function Work() {
  return (
    <div className="pt-4 pb-2">
      <div className=" py-5 px-5 flex flex-col items-start mt-17 ml-10 justify-center">
        <h3 className="text-5xl mb-7 text-center text-gray-800 dark:text-gray-100 font-bold">
          Work Experience
        </h3>
        <div className="p-2 w-full flex flex-wrap items-stretch">
          {Content.work.map((work, index) => {
            return <WorkExperienceCards indexVal={index} work={work} />;
          })}
        </div>
      </div>
    </div>
  );
}
