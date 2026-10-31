import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
