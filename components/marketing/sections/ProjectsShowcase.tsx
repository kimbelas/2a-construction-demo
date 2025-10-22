"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Downtown City Center",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    stats: { size: "50,000 sqft", duration: "18 months" },
  },
  {
    id: 2,
    title: "Luxury Residence",
    category: "Residential",
    location: "Beverly Hills",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    stats: { size: "8,500 sqft", duration: "12 months" },
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    category: "Renovation",
    location: "Westfield District",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
    stats: { size: "120,000 sqft", duration: "24 months" },
  },
  {
    id: 4,
    title: "Tech Campus",
    category: "Commercial",
    location: "Silicon Valley",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    stats: { size: "200,000 sqft", duration: "36 months" },
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects across residential,
            commercial, and renovation sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
              variants={staggerItem}
              whileHover="hover"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={{
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-neutral-200 text-sm mb-4">
                      {project.location} • {project.year}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm">
                      <div>
                        <span className="text-neutral-300">Size: </span>
                        <span className="font-semibold">{project.stats.size}</span>
                      </div>
                      <div>
                        <span className="text-neutral-300">Duration: </span>
                        <span className="font-semibold">{project.stats.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-white text-center"
                    variants={{
                      hover: { y: 0, opacity: 1 },
                    }}
                    initial={{ y: 20, opacity: 0 }}
                  >
                    <ExternalLink className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-lg font-semibold">View Project Details</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
