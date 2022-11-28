import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import  type { RootState, AppDispatch } from "./Store";

export const useAppDispach = () => useDispatch<AppDispatch>();
export const useAppSelector:  TypedUseSelectorHook<RootState> = useSelector;
