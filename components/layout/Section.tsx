import * as React from "react";

export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={`py-16 md:py-24 ${className || ""}`}
      {...props}
    />
  );
}
