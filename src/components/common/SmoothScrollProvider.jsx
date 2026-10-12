import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import "lenis/dist/lenis.css";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scrolling with premium inertia & damping
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect animation loop via requestAnimationFrame
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Smooth reset to top on route navigation
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
