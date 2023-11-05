import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Storyteller - Sign Up",
};

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="items-cetner flex h-screen justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
};

export default SignUpPage;
