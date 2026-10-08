import * as React from "react";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 ${className || ""}`}
      {...props}
    />
  );
}
