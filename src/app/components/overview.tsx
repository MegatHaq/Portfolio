export const OverviewBox = <T extends React.ReactNode>({
  TopBar,
  children,
}: {
  TopBar: T;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <div>{TopBar}</div>
      <div className="h-screen overflow-auto">{children}</div>
    </div>
  );
};
