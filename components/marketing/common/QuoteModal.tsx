"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function QuoteModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled later
    console.log("Form submitted");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isMinimized ? 0.9 : 1
        }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 max-w-[calc(100vw-2rem)]"
      >
        {isMinimized ? (
          // Minimized Button
          <motion.button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Quote + 10% OFF! 🎉
          </motion.button>
        ) : (
          // Full Modal
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full sm:w-[380px] overflow-hidden border-2 border-primary/20"
            layout
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-orange-500 text-white p-6 relative">
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors w-8 h-8 flex items-center justify-center"
                  title="Minimize"
                >
                  <span className="text-2xl font-bold leading-none">−</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors w-8 h-8 flex items-center justify-center"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-bold mb-2 pr-20">
                Get Your Free Quote + 10% OFF Today!
              </h3>
              <p className="text-white/90 text-sm">
                Answer these questions and we&apos;ll contact you within the next 15 minutes!
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <p className="text-neutral-700 font-semibold mb-4 text-center">
                Book your appointment with us!
              </p>
              <p className="text-sm text-neutral-600 mb-6 text-center">
                Enter your details below to claim your free quote from us.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Any Extra Details"
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book your appointment!
                </motion.button>
              </form>

              <p className="text-xs text-neutral-500 text-center mt-4">
                Use promo code <span className="font-bold text-primary">&quot;GET10&quot;</span> for 10% off!
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
