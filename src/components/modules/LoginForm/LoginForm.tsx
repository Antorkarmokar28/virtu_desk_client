/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [login] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  // login function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };
    try {
      const res = await login(loginData).unwrap();
      if (res?.success) {
        toast.success("Login is successfull");
        const user = verifyToken(res.data.accessToken);
        dispatch(setUser({ user: user, token: res.data.accessToken }));
        // input field clear
        reset();
        // navgation home page
        router.push("/");
      }
    } catch (err: any) {
      const errorMessage =
        err?.data?.message ||
        err?.error ||
        err?.message ||
        "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Login with your email and password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-500">
                    {errors.email.message.toString()}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "পাসওয়ার্ড আবশ্যক" })}
                />
                {errors.password?.message && (
                  <p className="text-sm text-red-500">
                    {errors.password?.message.toString()}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full dark:text-white">
                  {isSubmitting ? "Login..." : "Login"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Do not have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4 text-orange-500">
                Sign Up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
