"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Professional Painting",
    description: "Transform your home with our expert painting services. We deliver flawless finishes for interior and exterior projects, using premium materials and meticulous attention to detail. From single rooms to complete house repaints.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop",
    stats: "Premium Quality Finishes",
  },
  {
    title: "Bathroom Remodeling",
    description: "Create your dream bathroom with our comprehensive remodeling services. From modern updates to complete transformations, we handle everything from tile work to fixtures, delivering beautiful and functional spaces.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
    stats: "Expert Tile Installation",
  },
  {
    title: "Residential Remodels",
    description: "Bringing your vision to life with complete home renovations. We specialize in kitchens, bathrooms, flooring, electrical updates, and full home transformations. Quality craftsmanship backed by 10+ years of experience.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
    stats: "Full Spectrum Services",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yUp = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, position: 'relative' }}
      className="py-6 sm:py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image */}
          <motion.div
            style={{ y: isEven ? yUp : yDown, scale }}
            className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden shadow-xl rounded-lg ${isEven ? '' : 'lg:order-2'}`}
          >
            <div
              className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                <div className="text-primary text-xs sm:text-sm font-bold tracking-wider">
                  {service.stats}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={isEven ? '' : 'lg:order-1'}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-2 sm:mb-3"
            >
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
                Service {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight"
            >
              {service.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-4 sm:mb-6"
            >
              {service.description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="px-8 py-3 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary-dark transition-all"
              whileHover={{ x: 5 }}
            >
              LEARN MORE →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-white" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3"
          >
            What We Do
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Specializing in Painting, Bathrooms & Complete Residential Remodels in Seattle.
          </p>
        </motion.div>
      </div>

      {/* Service Cards */}
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </section>
  );
}
