import { Alert } from "./index";

export default {
  title: "Atoms/Alert", // ここに適切なタイトルを設定
  component: Alert,
};

export const Default = {
  args: { isActive: true, isActiveText: "text" },
};
