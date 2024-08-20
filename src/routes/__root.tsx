import { BluesnowContext } from "@/types/context";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route=createRootRouteWithContext<BluesnowContext>()({
    component:()=>(
        <div className="w-screen h-screen">
            <Outlet/>
            <TanStackRouterDevtools/>
        </div>
    )
}) 