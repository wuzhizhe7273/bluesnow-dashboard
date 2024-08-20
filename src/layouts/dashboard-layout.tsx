import {
  Newspaper,
  Package2,
} from "lucide-react"
import { Link, Outlet } from "@tanstack/react-router"

export function DashboardLayout() {
  return (
    // 容器
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
      {/* 侧边栏 */}
        <div className="flex flex-col h-full max-h-screen gap-2">
            {/* 导航标题 */}
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="w-6 h-6" />
              <span className="">BlueSnow Blog</span>
            </Link>
          </div>
          {/* 侧边导航 */}
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/articles"
                className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
              >
                <Newspaper className="w-4 h-4"/>
                文章
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
