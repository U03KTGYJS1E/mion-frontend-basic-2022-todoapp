import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: (value) => {
      console.log("taskname changed:" + value);
    },
    taskName: "taskname",
    defaultIsEditing: false,
  },
};
