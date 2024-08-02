const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full lg:border lg:border-border rounded-sm">{children}</div>;
};

export default Container;
