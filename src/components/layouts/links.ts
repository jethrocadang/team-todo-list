import { Focus, Folder, Users, LayoutGrid, Bookmark, Flag } from "lucide-react";


export const workspaceLinks = [
    {
      name: "Projects",
      path: "#",
      icon: Folder,
    },
    {
      name: "Teams",
      path: "#",
      icon: Users,
    },
  ];

  export const teamLinks = [
    {
      name: "Dashboard",
      path: "#",
      icon: LayoutGrid,
    },

    {
      name: "Task",
      path: "#",
      icon: Bookmark,
      subLinks: [
        { name: "Backlog", path: "#" },
        { name: "Active", path: "#" },
      ],
    },

    {
      name: "Team",
      path: "#",
      icon: Flag,
    },
  ];


  export const dummyTeams = [
    {
        id:"1",
        name: "Team 01",
        icon:""
    },
    {
        id:"2",
        name: "Team 01",
        icon:""
    }
  ]