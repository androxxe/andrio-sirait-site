"use client";

import { Experience, Skill, Template, Title } from "@/components";
import { experiences, skills, technologies } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

type ListsType = Array<{
  label: string;
  key: string;
}>;

const lists: ListsType = [
  {
    label: "Language",
    key: "languages",
  },
  {
    label: "Framework & Library",
    key: "framework_or_library",
  },
  {
    label: "Database",
    key: "databases",
  },
  {
    label: "Tools",
    key: "tools",
  },
];

const skillsData: any = skills;

const Resume = (): JSX.Element => {
  return (
    <Template menu="/resume">
      <AnimatePresence mode="wait">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }}>
          <Title>Work Experience</Title>
          <ol className="relative border-l space-y-10 mb-10">
            {experiences.map((experience, index) => (
              <Experience experience={experience} key={`experience_${index}`} />
            ))}
          </ol>
          <Title>Skill</Title>
          {lists.map((list, index) => (
            <div key={`list_${index}`}>
              <p className="font-bold mt-10 mb-8 underline text-center">{list.label}</p>
              <div className="w-full flex flex-wrap gap-[2.5rem]  justify-center">
                {skillsData[list.key].map((item: any, skill_index: number) => {
                  const technology = technologies.find((technology) => technology.code === item.code);

                  return <Skill key={`skill_${index}_${skill_index}`} src={technology?.logo_path as string} name={technology?.name as string} level={item.level} is_expertise={item.is_expertise} />;
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default Resume;
