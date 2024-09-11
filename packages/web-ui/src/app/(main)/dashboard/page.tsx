import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function Page() {
  const signOut = async () => {
    "use server";
    const { auth } = createClient();

    await auth.signOut();
    redirect("/auth");
  };

  return (
    <div className={cn("flex flex-col p-4")}>
      <ThemeToggle />

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
