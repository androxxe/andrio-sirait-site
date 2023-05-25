"use client";

import { educations, profile } from "@/data";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Education, Template, Title } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

// TO ENABLE "Q Do k kk X x" FORMATTING ON DAYJS
dayjs.extend(advancedFormat);

const ProfilePage: React.FC = () => {
  return (
    <Template menu="/profile">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Title>About Me</Title>
          <table className="table-fixed mt-5 mx-auto">
            <tbody>
              <tr>
                <td className="text-left text-sm w-[180px]">Name</td>
                <td className="text-right font-semibold">
                  {profile.name_with_title}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm w-[180px]">Date of Birth</td>
                <td className="text-right font-semibold">
                  {dayjs(profile.date_of_birth).format("MMMM, Do YYYY")}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm w-[180px]">Phone</td>
                <td className="text-right font-semibold">{profile.phone}</td>
              </tr>
              <tr>
                <td className="text-left text-sm w-[180px]">Email</td>
                <td className="text-right font-semibold">{profile.email}</td>
              </tr>
              <tr>
                <td className="text-left text-sm w-[180px]">Web</td>
                <td className="text-right font-semibold">{profile.website}</td>
              </tr>
              <tr>
                <td className="text-left text-sm w-[180px]">Address</td>
                <td className="text-right font-semibold">
                  {profile.address?.city}
                </td>
              </tr>
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
