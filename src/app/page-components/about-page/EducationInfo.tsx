import { Badge } from "@/components/ui/badge";

type EducationInfoProps = {
  title: string;
  text: string;
  badge: string[];
  result: string;
};

export function EducationInfo(props: EducationInfoProps) {
  const { text, title, badge, result } = props;
  return (
    <div className="flex flex-col ml-8">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex gap-4 mt-2">
        {badge.map((badge, index) => (
          <Badge key={index} className="">
            {badge}
          </Badge>
        ))}
      </div>
      <p className="text-sm mt-4 text-justify text-gray-500">{text}</p>
      <div className="mt-2">
        <Badge variant={"outline"}>Final Results : {result}</Badge>
      </div>
    </div>
  );
}
