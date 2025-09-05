"use client";

import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button } from "@/components/ui";
import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <SectionContainer>
      <ViewContainer className="text-center">
        <Button onClick={() => signIn("github")}>Sign in to Github</Button>
      </ViewContainer>
    </SectionContainer>
  );
}
