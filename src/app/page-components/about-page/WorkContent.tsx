import { SkillCards } from "./SkillCards";

const item = [
  {
    title: "Frontend",
    description: "These are the skills I have for frontend.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["NextJS", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Backend",
    description: "These are the skills I have for backend.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["Flask", "Express", "NodeJS"],
  },
  {
    title: "Database Related",
    description: "These are the skills I have related to Database.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["MySQL", "Postgres"],
  },
  {
    title: "Requests",
    description: "These are the skills I used for making requests.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["GrapqhQL", "Restful APIs", "Axios"],
  },
];

export function WorkContent() {
  return (
    <div className="mt-6 flex gap-12 w-full">
      <div className="flex flex-col h-full">
        <div className="">
          <h1 className="text-2xl">Professional Skills.</h1>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 w-full">
          {item.map((item, index) => (
            <SkillCards {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
