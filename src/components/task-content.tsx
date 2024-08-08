"use client";

import { Text } from "./text";

const TaskContent = () => {
  return (
    <div className="container h-fit pt-16">
      <Text size={"h1"} type={"bold"}>
        Title
      </Text>
      <div className="pt-10">
        <Text size={"md"}>Description</Text>
      </div>
    </div>
  );
};

export default TaskContent;
