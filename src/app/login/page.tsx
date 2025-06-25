import { LoginForm } from "@/components/modules/LoginForm/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-cover bg-center flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {/* login form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
