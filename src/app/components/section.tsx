import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent } from "react";

type SectionProps = {
  title: string;
  text: string;
  Icon?: ForwardRefExoticComponent<LucideProps>;
};

export function Section(props: SectionProps) {
  const { text, title, Icon } = props;

  return (
    <div className="flex flex-col px-4">
      {Icon && (
        <div className="flex justify-center text-[gray] mb-2">
          <Icon width={50} height={50} />
        </div>
      )}
      <div>
        <h1 className="text-center text-2xl my-4">{title}</h1>
      </div>
      <div>
        <p className="text-gray-500 text-sm text-center">{text}</p>
      </div>
    </div>
  );
}
