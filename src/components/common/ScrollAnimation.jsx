import React from "react";
import { motion } from "framer-motion";

/**
 * Fade up animation wrapper when scrolled into view
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.45,
  y = 20,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade in animation wrapper when scrolled into view
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.45,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scale up animation wrapper when scrolled into view
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.45,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for child elements
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = ""
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 15,
  className = ""
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
