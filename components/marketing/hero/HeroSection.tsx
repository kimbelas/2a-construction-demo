"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";

function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value, 1500);

  return (
    <div ref={ref} className="relative group">
      <div className="text-center transform transition-all duration-300 group-hover:scale-105">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            {count}{suffix}
          </div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        <div className="text-[10px] sm:text-xs md:text-sm text-white uppercase tracking-tight sm:tracking-wide md:tracking-wider font-semibold mt-2 sm:mt-3 leading-tight px-2">
          {label}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black" style={{ position: 'relative' }}>
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop')",
          }}
        >
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20">

        <div className="max-w-7xl w-full">
          {/* Main Content */}
          <div className="text-center mb-20 lg:mb-32">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative mb-8"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 pt-4 leading-[0.95] tracking-tight">
                Top-notch
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-[0.95] tracking-tight">
                <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                  Painting &
                </span>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tight">
                Remodels
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-14 max-w-4xl mx-auto leading-relaxed font-light"
            >
              A family company delivering unbeatable quality & affordability for over 10 years.
              <span className="block mt-2 text-neutral-400">
                We service Seattle & all surrounding areas specializing in Residential Remodels, Painting & Bathrooms.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                className="group relative px-12 py-5 bg-gradient-to-r from-primary to-orange-500 text-white text-base md:text-lg font-bold tracking-wide overflow-hidden shadow-2xl shadow-primary/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">GET FREE QUOTE</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                className="group relative px-12 py-5 bg-transparent text-white text-base md:text-lg font-bold tracking-wide border-2 border-white/30 hover:border-primary transition-all overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">(206)-339-3499</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Animated Stats - Cleaner design */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/[0.15] to-white/[0.08] border border-white/20 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <StatCounter value={240} label="Successful Projects" suffix="+" />
                <StatCounter value={100} label="Satisfied Customers" suffix="%" />
                <StatCounter value={10} label="Years Experience" suffix="+" />
                <StatCounter value={20} label="Team Members" suffix="+" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Floating particles effect - Client only to prevent hydration mismatch */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
