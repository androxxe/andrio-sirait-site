"use client";

import { Experience, Skill, Template, Title } from "@/components";
import { experiences, skills, technologies } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

// ["languages", "framework_or_library", "tools"]
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

type ListsType = Array<{
  label: string;
  key: string;
}>;

type ListType = {
  label: string;
  key: string;
};

type SkillType = {
  level: string;
  code: string;
};

const Resume: React.FC = () => {
  return (
    <Template menu="/resume">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Title>Work Experience</Title>
          <ol className="relative border-l space-y-10 mb-10">
            {experiences.map((experience, index) => (
              <Experience experience={experience} key={`experience_${index}`} />
            ))}
          </ol>
          <Title>Skill</Title>
          {lists.map((list, index) => (
            <div key={`list_${index}`}>
              <p className="font-bold mt-10 mb-8 underline text-center">
                {list.label}
              </p>
              <div className="w-full flex flex-wrap gap-[2.5rem]  justify-center">
                {skills[list.key].map((item, skill_index) => (
                  <Skill
                    key={`skill_${index}_${skill_index}`}
                    src={
                      technologies.find(
                        (technology) => technology.code === item.code
                      )?.logo_path
                    }
                    name={
                      technologies.find(
                        (technology) => technology.code === item.code
                      )?.name
                    }
                    level={item.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default Resume;
