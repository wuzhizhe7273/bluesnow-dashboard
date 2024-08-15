import { useAuth } from '@/store/auth';
import { MenuItemType } from '@/types';
import { redirect } from '@tanstack/react-router';
import useSwr from 'swr';
export const userApis={
    useCurrentMenu:()=>{
        const [auth]=useAuth();
        return useSwr({url:"/users/current/menus",token:auth?.token},async({url,token})=>{
            const data=await fetch(url,{
                headers:{
                    "Authorization":`Bearer ${token}`,
                }
            }).then(res=>res.json());
            return data as MenuItemType[];
        })
    }
}