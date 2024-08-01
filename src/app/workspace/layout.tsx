import SideBar from "@/components/layouts/sidebar";

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-full">
      <SideBar />
      <div>{children}</div>
    </main>
  );
}
