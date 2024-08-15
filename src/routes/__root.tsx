import { BluesnowContext } from "@/types/context";
import { createRootRoute, createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route=createRootRouteWithContext<BluesnowContext>()({
    component:()=>(
        <>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    )
}) 