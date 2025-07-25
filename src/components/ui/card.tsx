import * as React from "react";
import { cn } from "./utils";

type DivProps = React.ComponentProps<"div">;

const Card: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    data-slot="card"
    className={cn(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
      className
    )}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    data-slot="card-header"
    className={cn(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className
    )}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle: React.FC<DivProps> = ({ className, ...props }) => (
  <h4 data-slot="card-title" className={cn("leading-none", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription: React.FC<DivProps> = ({ className, ...props }) => (
  <p
    data-slot="card-description"
    className={cn("text-muted-foreground", className)}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardAction: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className
    )}
    {...props}
  />
);
CardAction.displayName = "CardAction";

const CardContent: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    data-slot="card-content"
    className={cn("px-6 [&:last-child]:pb-6", className)}
    {...props}
  />
);
CardContent.displayName = "CardContent";

const CardFooter: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    data-slot="card-footer"
    className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
};
