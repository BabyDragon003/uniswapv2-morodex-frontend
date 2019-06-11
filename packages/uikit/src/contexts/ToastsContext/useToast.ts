import { useContext } from "react";
import { ToastsContext } from "./Provider";

export const useToast = () => {
  const toastContext = useContext(ToastsContext);
};
