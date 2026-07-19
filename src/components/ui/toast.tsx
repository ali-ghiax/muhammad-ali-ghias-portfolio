"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type ToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
};

export function Toast({ open, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="fixed top-20 left-1/2 z-[100] w-[min(92vw,24rem)] -translate-x-1/2"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3 rounded-xl border border-primary/25 bg-background px-4 py-3 shadow-lg shadow-black/10">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="flex-1 text-sm font-medium text-foreground leading-snug">
              {message}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss"
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
