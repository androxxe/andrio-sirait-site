"use client";

import { educations, profile } from "@/data";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Education, Template, Title } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

// TO ENABLE "Q Do k kk X x" FORMATTING ON DAYJS
dayjs.extend(advancedFormat);

const aboutMeLists: Array<{ label: string; value: string }> = [
  {
    label: "Name",
    value: profile.name_with_title,
  },
  {
    label: "Date of Birth",
    value: dayjs(profile.date_of_birth).format("MMMM, Do YYYY"),
  },
  {
    label: "Phone",
    value: profile.phone,
  },
  {
    label: "Email",
    value: profile.email,
  },
  {
    label: "Web",
    value: profile.website,
  },
  {
    label: "Address",
    value: profile.address?.city,
  },
];

const ProfilePage = (): JSX.Element => {
  return (
    <Template menu="/profile">
      <AnimatePresence mode="wait">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }}>
          <Title>About Me</Title>
          <table className="table-fixed mt-5 mx-auto">
            <tbody>
              {aboutMeLists.map((list, index) => (
                <tr key={`list_${index}`}>
                  <td className="text-left text-sm w-[180px]">{list.label}</td>
                  <td className="text-right font-semibold">{list.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Title>Education</Title>
          <ol className="relative border-l space-y-10">
            {educations.map((education, index) => (
              <Education education={education} key={`education_${index}`} />
            ))}
          </ol>
          <Title>Hobbies</Title>
          <p className="text-center md:mx-20 mb-14">{profile.hobbies}</p>
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default ProfilePage;
