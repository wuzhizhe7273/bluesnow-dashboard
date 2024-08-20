import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@tanstack/react-router"

export function LoginPage() {
    return (
        // 外部容器
        <div className="w-full min-h-full lg:grid lg:grid-cols-2">
            {/* 左部登录栏 */}
            <div className="flex items-center justify-center py-12">
                {/* 登录表单 */}
                <div className="mx-auto grid w-[350px] gap-6">
                    {/* 表单标题 */}
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    {/* 表单主体 */}
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="inline-block ml-auto text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    {/* 表单foot */}
                    <div className="mt-4 text-sm text-center">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            {/* 右部图片栏 */}
            <div className="hidden bg-muted lg:block">
                {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
            </div>
        </div>
    )
}
