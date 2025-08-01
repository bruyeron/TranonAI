"use client";


import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

export function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>
) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", props.className)}
      {...props}
    />
  );
}

export function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...rest}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 text-muted-foreground" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content>
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      )}
      {...rest}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
