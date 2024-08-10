import {
  Loader,
  Minus,
  CircleUserRound,
  Calendar,
  Plus,
  Circle,
  Clock,
  CircleCheckBig,
  CircleAlert,
  CircleArrowUp,
  CircleArrowDown,
  CircleMinus,
} from "lucide-react";

export const selectStatusItems = [
  { icon: Loader, value: "Backlog" },
  { icon: Circle, value: "Todo" },
  { icon: Clock, value: "In progress" },
  { icon: CircleCheckBig, value: "Done" },
];

export const selectPriorityItems = [
  { icon: CircleAlert, value: "Urgent!" },
  { icon: CircleArrowUp, value: "High" },
  { icon: CircleMinus, value: "Medium" },
  { icon: CircleArrowDown, value: "Low" },
];

export const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];
