import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Storyteller - Sign In",
};

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="items-cetner flex h-screen justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
};

export default SignInPage;
