"use client";

import { Button } from "@/components/ui";
import { login } from "@/lib/actions/auth";

function SignInButton() {
  return <Button onClick={() => login()}>Sign In</Button>;
}

export { SignInButton };
