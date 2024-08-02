import NavContent from "./nav-content";

const SideBar = () => {
  return (
    <aside className="hidden h-full w-[230px] p-5 lg:block">
      <NavContent />
    </aside>
  );
};

export default SideBar;
