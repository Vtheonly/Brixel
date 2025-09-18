// src/components/ui/TextArea.tsx
import { cn } from "@/lib/utils";
import React from "react";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TextArea.displayName = "TextArea";

export default TextArea;
