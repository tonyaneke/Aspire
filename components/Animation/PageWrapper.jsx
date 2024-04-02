import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
