import dayjs from "dayjs";
import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { MdWork } from "react-icons/md";

interface TExperience {
  experience: {
    working_date: Array<{
      start_month: number;
      start_year: number;
      end_month?: number | null;
      end_year?: number | null;
      status: string;
    }>;
    company: string;
    position: string;
    description: string;
  };
}

const Experience = (props: TExperience) => {
  const { experience } = props;

  return (
    <li className="ml-5">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white">
        <MdWork className="text-primary-600 text-xs" />
      </span>
      {experience.working_date.map((working_date, index) => (
        <div
          className="text-sm font-normal space-x-2 text-gray-400 flex items-center"
          key={`working_date_${experience.company}_${index}`}
        >
          <span>
            {dayjs(
              `${working_date.start_year}-${working_date.start_month}-01`
            ).format("MMM YYYY")}
            {" - "}
            {working_date.end_month && working_date.end_year
              ? dayjs(
                  `${working_date.start_year}-${working_date.start_month}-01`
                ).format("MMM YYYY")
              : "Now"}
          </span>
          <RxDotFilled className="text-sm inline-block text-primary-600" />
          <span className="text-gray-400">{working_date.status}</span>
        </div>
      ))}
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
        {experience.company} - {experience.position}
      </h3>
      <p className="mb-4 text-sm font-normal text-gray-500">
        {experience.description}{" "}
      </p>
    </li>
  );
};

export default Experience;
