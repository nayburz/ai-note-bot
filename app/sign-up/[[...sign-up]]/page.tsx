import { SignUp } from "@clerk/nextjs";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="items-cetner flex h-screen justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
};

export default SignUpPage;
