import { createContext, useContext } from "react"
export type GlobalContent = {
   productCount: number,
   setProductCount:(c: number) => void,
}
export const MyGlobalContext = createContext<GlobalContent>({
   productCount: 1,
   setProductCount: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)