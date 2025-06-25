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
import { useSignupMutation } from "@/redux/features/signup/signup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const [signupUser] = useSignupMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };

    try {
      const res = await signupUser(userData).unwrap();
      if (res.success) {
        toast.success("Signup is successfully");
        reset();
        router.push("/login");
      }
    } catch (err: any) {
      const errorMessage =
        err?.data?.message ||
        err?.error ||
        err?.message ||
        "Somthing went wrong and try to again";

      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Create a new account with your details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Name */}
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name?.message && (
                  <p className="text-sm text-red-500">
                    {errors.name.message.toString()}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-500">
                    {errors.email.message.toString()}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Please enter a password with at least 6 characters",
                    },
                  })}
                />
                {errors.password?.message && (
                  <p className="text-sm text-red-500">
                    {errors.password.message.toString()}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value: any) =>
                      value === watch("password") || "Don't matched password",
                  })}
                />
                {errors.confirmPassword?.message && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message.toString()}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full dark:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sign Up..." : "Sign Up"}
                </Button>
              </div>

              {/* Login Link */}
              <div className="mt-4 text-center text-sm">
                Do you have an account?{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-4 text-orange-500 cursor-pointer"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
