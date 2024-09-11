"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons/icons";

export default function LoginPage() {
  const { auth } = createClient();

  const signIn = (provider: any) => {
    auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  return (
    <div className={cn("justify-center items-center flex-1 flex flex-col p-5")}>
      <div className={cn("flex flex-col w-full max-w-sm space-y-6")}>
        <div className={cn("flex flex-col space-y-2 text-center")}>
          <h1 className={cn("text-2xl font-semibold tracking-tight")}>
            Create an account
          </h1>
          <p className={cn("text-sm text-muted-foreground")}>
            Enter your email below to create your account
          </p>
        </div>

        <div className={cn("flex flex-col w-full gap-5")}>
          <Button variant="outline" onClick={() => signIn("google")}>
            <Icons.google />
            Sign in with Google
          </Button>

          <Button variant="outline" onClick={() => signIn("apple")}>
            <Icons.apple />
            Sign in with Apple
          </Button>

          <Button variant="outline" onClick={() => signIn("github")}>
            <Icons.github />
            Sign in with Github
          </Button>

          <Button variant="outline" onClick={() => signIn("twitter")}>
            <Icons.twitter />
            Sign in with Twitter
          </Button>

          <Button variant="outline" onClick={() => signIn("facebook")}>
            <Icons.facebook />
            Sign in with Facebook
          </Button>

          <Button variant="outline" onClick={() => signIn("azure")}>
            <Icons.microsoft />
            Sign in with Microsoft
          </Button>
        </div>

        <div className={cn("relative")}>
          <div className={cn("absolute inset-0 flex items-center")}>
            <span className={cn("w-full border-t")} />
          </div>

          <div className={cn("relative flex justify-center text-xs uppercase")}>
            <span className={cn("bg-background px-2 text-muted-foreground")}>
              Or continue with
            </span>
          </div>
        </div>

        {/* TODO - Sign in with Enterprise SSO */}
        <Button onClick={() => console.log("Enterprise SSO: Unimplemented")}>
          Enterprise SSO
        </Button>

        <p className={cn("px-8 text-center text-sm text-muted-foreground")}>
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className={cn("underline underline-offset-4 hover:text-primary")}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className={cn("underline underline-offset-4 hover:text-primary")}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
