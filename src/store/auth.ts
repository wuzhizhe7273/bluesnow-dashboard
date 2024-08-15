import { AuthState } from "@/types/state";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const authAtom=atomWithStorage<AuthState>("auth",null);

export const useAuth:()=>[AuthState,(auth:AuthState)=>void]=()=>{
    const [auth,setAuth]=useAtom(authAtom);
    return [auth,(auth)=>{
        setAuth(auth)
    }]
}