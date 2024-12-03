import { Github, InboxIcon, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const item = [
  { Icon: Github, URI: "https://github.com/MegatHaq" },
  {
    Icon: Linkedin,
    URI: "https://www.linkedin.com/in/megat-abdul-haq-157657300/?trk=opento_sprofile_details",
  },
  { Icon: Instagram, URI: "https://www.instagram.com/megathaqq/?next=%2F" },
];

export function Footer() {
  return (
    <div className="md:h-[10vh] bg-slate-800 text-white md:flex md:flex-row justify-between mt-12 text-sm overflow-hidden flex flex-col items-center">
      <div className="mx-[15vw] mt-6 flex gap-4 mb-6">
        <InboxIcon />
        <div>dnmegatmehat@gmail.com</div>
      </div>
      <div className="mt-6 flex gap-4 mb-6">
        {item.map((item, index) => {
          const Icon = item.Icon;
          return (
            <Link key={index} href={item.URI}>
              <Icon
                className="bg-white text-black rounded-full p-1 hover:cursor-pointer hover:bg-black hover:text-white ease-in-out duration-200"
                width={35}
                height={35}
              />
            </Link>
          );
        })}
      </div>
      <div className="mx-[15vw] mt-6 mb-6">2024@Megat Abdul Haq</div>
    </div>
  );
}
