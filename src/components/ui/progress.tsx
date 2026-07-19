"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  delay?: number;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, label, showValue = true, className, delay = 0 }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {(label || showValue) && (
          <div className="flex justify-between items-center">
            {label && <span className="text-sm text-muted-foreground">{label}</span>}
            {showValue && <span className="text-sm font-mono text-primary">{value}%</span>}
          </div>
        )}
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{ duration: 1, delay: delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };