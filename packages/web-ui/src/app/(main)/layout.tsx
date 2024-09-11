import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={cn("flex flex-col")}>{children}</div>;
}
