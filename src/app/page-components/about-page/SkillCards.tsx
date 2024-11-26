import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SkillCardProps = {
  title: string;
  content: string;
  description: string;
  skill: string[];
};

export function SkillCards(props: SkillCardProps) {
  const { title, description, content, skill } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex gap-2">
        {skill.map((item, index) => (
          <Button key={index} variant={"ghost"}>
            {item}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
