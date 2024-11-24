import { Badge } from "@/components/ui/badge";

type EducationInfoProps = {
  title: string;
  text: string;
  badge: string[];
};

export function EducationInfo(props: EducationInfoProps) {
  const { text, title, badge } = props;
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h1 className="text-2xl">{title}</h1>
        {badge.map((badge, index) => (
          <Badge key={index} className="ml-4">
            {badge}
          </Badge>
        ))}
      </div>
      <p className="text-sm mt-6 text-justify text-gray-500">{text}</p>
    </div>
  );
}
