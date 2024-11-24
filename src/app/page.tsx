import { redirect } from "next/navigation";
import { FirstContent } from "./page-components/home-page/FirstContent";
import { SecondContent } from "./page-components/home-page/SecondContent";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(await params);

  redirect("/home");

  return <div className="h-screen w-full overflow-auto">Please wait</div>;
}
