import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingConnect() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-navy-gradient px-5 py-3 font-medium text-primary-foreground shadow-elegant shadow-glow"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Let's Connect</span>
    </motion.a>
  );
}
