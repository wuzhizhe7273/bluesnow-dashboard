import { http, HttpResponse } from "msw";

const menus = [
    {
        label: "settings",
        href: "#",
        icon: "Settings"
    },
    {
        label:"Home",
        href:"#",
        icon:"Home"
    }
]

export const userHandlers = [
    http.get("/users/current/menus", () => {
        return HttpResponse.json(
           menus
        )
    })
]