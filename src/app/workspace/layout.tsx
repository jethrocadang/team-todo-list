import SideBar from "@/components/layouts/sidebar";

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-full w-full">
      <SideBar />
      <div className="w-full lg:p-2.5">{children}</div>
    </main>
  );
}
