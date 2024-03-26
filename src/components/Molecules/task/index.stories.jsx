import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    taskName: "taskname",
    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: () => {
      console.log("taskname changed");
    },
  },
};
