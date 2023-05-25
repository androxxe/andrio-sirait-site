import Image from "next/image";

type SkillType = {
  src?: string | null;
  name?: string | null;
  level?: string | null;
};

const Skill: React.FC<SkillType> = ({ src, name, level }) => {
  if (!src || !name || !level) return null;

  return (
    <div className="w-[calc(50%-2.5rem)] lg:w-[calc(25%-2.5rem)] h-44 flex flex-col">
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
        <p className="text-xs text-gray-600">{level}</p>
      </div>
    </div>
  );
};

export default Skill;
