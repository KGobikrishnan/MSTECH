import React from "react";
import { motion } from "framer-motion";

/**
 * Fade up animation wrapper when scrolled into view
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  y = 30,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
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
  duration = 0.5,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
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
  duration = 0.5,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for child elements - acts as a pass-through wrapper
 */
export function StaggerContainer({
  children,
  className = ""
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/**
 * StaggerItem triggers INDIVIDUALLY when EACH card enters the viewport while scrolling
 */
export function StaggerItem({
  children,
  y = 30,
  delay = 0,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
