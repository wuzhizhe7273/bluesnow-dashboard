import React from "react"

export interface PageLayoutProps{
    pageHeader?:Array<React.ReactElement>
    children:React.ReactElement,
}

export const PageLayout:React.FC<PageLayoutProps> = ({pageHeader,children}) => {
    return (
        <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                {pageHeader}
            </header>
            <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>
        </div>
    )
}