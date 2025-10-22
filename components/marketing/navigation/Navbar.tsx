"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useScrollPast } from "@/lib/hooks/useScrollAnimation";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";
import { mainNavigation } from "@/lib/constants/navigation";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasScrolled = useScrollPast(50);
  const isMobile = useIsMobile();

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hasScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-black/20 backdrop-blur-sm py-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <motion.div
                className="text-xl md:text-2xl font-bold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-primary">2A</span>
                <span className={cn(
                  "transition-colors",
                  hasScrolled ? "text-neutral-900" : "text-white"
                )}>
                  {" "}Construction
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.href}
                  className="relative group cursor-pointer"
                >
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      hasScrolled
                        ? "text-neutral-700 hover:text-primary"
                        : "text-white/90 hover:text-primary"
                    )}
                  >
                    {item.name}
                  </span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <motion.button
                className="px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary-dark transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                (206)-339-3499
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                hasScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={cn("w-6 h-6", hasScrolled ? "text-neutral-900" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", hasScrolled ? "text-neutral-900" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-neutral-200">
                  <span className="text-xl font-bold">
                    <span className="text-primary">2A</span> Construction
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <motion.ul
                    className="space-y-2"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {mainNavigation.map((item) => (
                      <motion.li
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div
                          className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-neutral-200">
                  <motion.button
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Call (206)-339-3499
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
