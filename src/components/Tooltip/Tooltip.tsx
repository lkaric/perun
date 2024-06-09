"use client";

import React, { forwardRef } from "react";
import {
  Tooltip as TooltipBase,
  Provider as TooltipProvider,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
} from "@radix-ui/react-tooltip";

import { cn } from "../../utils";

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipContent> {
  children?: React.ReactNode;
  content: string;
}

const Tooltip = forwardRef<
  React.ElementRef<typeof TooltipContent>,
  React.ComponentPropsWithoutRef<typeof TooltipContent>
>(({ className, sideOffset = 4, children, content, ...props }, ref) => (
  <TooltipProvider>
    <TooltipBase>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        ref={ref}
        sideOffset={sideOffset}
        className={cn("tooltip", className)}
        {...props}
      >
        {content}
      </TooltipContent>
    </TooltipBase>
  </TooltipProvider>
));

TooltipContent.displayName = TooltipContent.displayName;

export { Tooltip };
export type { TooltipProps };
