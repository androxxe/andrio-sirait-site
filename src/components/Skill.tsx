import Image from "next/image";
import { SlBadge } from "react-icons/sl";

type SkillType = {
  src?: string | null;
  name?: string | null;
  level?: string | null;
  is_expertise?: boolean;
};

const Skill: React.FC<SkillType> = ({ src, name, level, is_expertise }) => {
  if (!src || !name) return null;

  return (
    <div
      className={`w-[calc(50%-2.5rem)] lg:w-[calc(25%-2.5rem)] h-44 flex flex-col rounded relative ${
        is_expertise ? "border border-red-500" : ""
      }`}
    >
      {is_expertise ? (
        <div className="text-center absolute top-0 right-0 left-0 bg-red-500 px-2 py-1 space-x-2 flex items-center w-full text-white">
          <SlBadge className="font-bold" size={16} />
          <span className="text-xs">Top Expertise</span>
        </div>
      ) : null}
      <div className="flex justify-center items-center flex-1 bg-slate-100 rounded">
        <Image
          alt={name}
          src={src}
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>
      <div className="text-center bg-slate-200 py-3 rounded">
        <p className="text-slate-800">{name}</p>
        {level ? <p className="text-xs text-gray-600">{level}</p> : null}
        {/* {is_expertise ? "ya" : null} */}
      </div>
    </div>
  );
};

export default Skill;
