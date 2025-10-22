"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    company: "Beverly Hills Residence",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "2A Construction exceeded our expectations in every way. From the initial consultation to the final walkthrough, their professionalism and attention to detail were outstanding. Our dream home became a reality thanks to their expertise.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Working with 2A Construction on our new office complex was a seamless experience. They delivered on time, within budget, and the quality of workmanship is exceptional. Highly recommended for commercial projects.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    company: "Westfield Shopping District",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "The mall renovation project was complex and challenging, but 2A Construction handled it with incredible skill. Their team coordinated perfectly with our operations, minimizing disruption while delivering stunning results.",
  },
];

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="relative h-96 md:h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="h-full flex items-center justify-center px-4 md:px-12">
                  <div className="max-w-4xl">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-primary mb-6 mx-auto" />

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-primary fill-primary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-neutral-700 text-center mb-8 leading-relaxed">
                      &quot;{testimonials[current].text}&quot;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="text-left">
                        <p className="font-bold text-neutral-900">
                          {testimonials[current].name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {testimonials[current].role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-neutral-50 rounded-full shadow-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-neutral-50 rounded-full shadow-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
