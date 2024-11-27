import { Footer } from "./Footer";

export const OverviewBox = <T extends React.ReactNode>({
  TopBar,
  children,
}: {
  TopBar: T;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <div className="h-screen overflow-auto scrollbar">
        {TopBar}
        {children}
        <Footer />
      </div>
    </div>
  );
};
