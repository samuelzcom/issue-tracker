import Link from "next/link";

const LoginButton = () => {
  return <Link href='/auth/signin'><button type="submit">Login</button></Link>;
};

export default LoginButton;
