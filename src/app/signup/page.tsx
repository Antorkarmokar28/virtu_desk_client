import SignupForm from "@/components/modules/SignupForm/SignupForm";

const SignupPage = () => {
  return (
    <div className="bg-center bg-cover flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
