"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Complete Home Painting",
    category: "Interior & Exterior Painting",
    location: "Seattle, WA",
    year: "2024",
    description: "Full house painting transformation including interior walls, ceilings, trim, and exterior surfaces. Premium paint application with flawless finish and attention to detail.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&h=1200&fit=crop",
    stats: {
      scope: "Full House",
      duration: "2 Weeks",
      finish: "Premium Quality",
    },
  },
  {
    id: 2,
    title: "Modern Bathroom Renovation",
    category: "Bathroom Remodeling",
    location: "Seattle Area",
    year: "2024",
    description: "Complete bathroom transformation with expert tile installation, modern fixtures, and waterproofing. Meticulous craftsmanship delivering a spa-like experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&h=1200&fit=crop",
    stats: {
      features: "Custom Tile",
      quality: "Expert Install",
      warranty: "Guaranteed",
    },
  },
  {
    id: 3,
    title: "Kent Condo Modernization",
    category: "Full Home Remodel",
    location: "Kent, WA",
    year: "2023",
    description: "Complete condo transformation including wooden floors, electrical upgrades, modernized kitchen, and stylish bathroom. Contemporary look with functional excellence.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1600&h=1200&fit=crop",
    stats: {
      scope: "Full Remodel",
      style: "Contemporary",
      result: "Modernized",
    },
  },
  {
    id: 4,
    title: "Waterproof Stucco Installation",
    category: "Exterior Solutions",
    location: "Seattle, WA",
    year: "2024",
    description: "Professional waterproofed stucco wall installation combined with exterior painting. Durable, weather-resistant finish protecting your home for years to come.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1200&fit=crop",
    stats: {
      protection: "Waterproof",
      durability: "Long-lasting",
      warranty: "Guaranteed",
    },
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-black/60" />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-3 py-1 text-xs font-bold tracking-wider uppercase">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Title & Year */}
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {project.location} • {project.year}
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                  {value}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="bg-neutral-900 py-16 md:py-20" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
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
            className="text-primary text-sm font-bold tracking-widest uppercase mb-3"
          >
            Portfolio
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Recent projects showcasing our commitment to quality and customer satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
