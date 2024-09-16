"use client";

const MarginContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="container mx-auto mt-16">{children}</div>;
};

export default MarginContainer;
