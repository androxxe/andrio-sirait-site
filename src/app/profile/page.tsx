import { educations, profile } from "@/data";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Education, PageTransition, Template, Title } from "@/components";

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

export default function ProfilePage() {
  return (
    <Template menu="/profile">
      <PageTransition>
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
      </PageTransition>
    </Template>
  );
}
