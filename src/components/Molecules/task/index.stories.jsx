import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: () => {
      console.log("taskname changed");
    },
    taskName: "taskname",
    defaultIsEditing: false,
  },
};
