import { cn } from "@/lib/utils";

function SectionContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn(className, "py-6")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
