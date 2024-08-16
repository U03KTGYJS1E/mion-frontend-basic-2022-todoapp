import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

/* コンポーネント関数内 */
export const AlertManager = () => {
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  //AlertHandlerContextから直接値が取り出せる
  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);
  return (
    <Alert
      isActive={AlertHandlerContext.visible}
      isActiveText={AlertHandlerContext.errorText}
    />
  );
};
