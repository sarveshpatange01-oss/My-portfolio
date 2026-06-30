import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-gradient shadow-glow">
                <span className="font-display text-3xl font-bold text-primary-foreground">SP</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="h-0.5 overflow-hidden rounded-full bg-muted"
            >
              <div className="h-full w-full bg-navy-gradient" />
            </motion.div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading portfolio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
