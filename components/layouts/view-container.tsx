import { cn } from "@/lib/utils";

function ViewContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn(className, "mx-auto max-w-7xl px-4")} {...props}>
      {children}
    </div>
  );
}

export { ViewContainer };
