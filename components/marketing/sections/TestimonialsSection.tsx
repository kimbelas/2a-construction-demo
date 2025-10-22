"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Art and his team redid painting on our full house, and installed a waterproofed stucco wall, among other things. Art is incredibly friendly, responsive, thorough, and very professional. His team was very prompt and friendly, and excellent in their field. Andrey, our tile guy, was like Michelangelo - very detailed and thorough! The contract was clear and professional, and the final bill held no surprises.",
    author: "Lauren Radie",
    role: "Homeowner",
    company: "Seattle, WA",
    project: "Full House Paint & Stucco",
    stats: "Complete Exterior Transformation",
    image: "https://i.pravatar.cc/400?img=5",
    rating: 5,
  },
  {
    id: 2,
    quote: "We used 2A construction and Art to clean up the mess our first contractor left. Art did an amazing job. The quality of his work, the ease of communication, the professionalism by his team and the ability to complete projects on time, were all outstanding. We are so lucky to have found him and tell everyone we know they need to use him.",
    author: "Liz B.",
    role: "Homeowner",
    company: "Seattle Area",
    project: "Residential Remodel",
    stats: "Project Completion & Cleanup",
    image: "https://i.pravatar.cc/400?img=1",
    rating: 5,
  },
  {
    id: 3,
    quote: "Art and his team are the best! Great to work with and the quality of the work is incredible. I have used Art's team for multiple residential projects. They also work really fast and efficiently. Couldn't have worked with a better crew! Will definitely use them again in the future and I highly recommend this company.",
    author: "Maren Earn",
    role: "Homeowner",
    company: "Seattle, WA",
    project: "Multiple Residential Projects",
    stats: "Fast & Efficient Service",
    image: "https://i.pravatar.cc/400?img=10",
    rating: 5,
  },
  {
    id: 4,
    quote: "They updated my condo to have a contemporary look and functionality, with wooden floors, additional electrical wiring, new fixtures, modernized kitchen and a stylish new bathroom. My Kent condo has lost its 'has-been 20-year-old decor' and become a unique and attractive modern condo. The prices are reasonable and over matched by the professionalism and enthusiasm of Art and his talented team.",
    author: "Ram Willner",
    role: "Homeowner",
    company: "Kent, WA",
    project: "Complete Condo Modernization",
    stats: "Full Interior Renovation",
    image: "https://i.pravatar.cc/400?img=33",
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="py-4 md:py-6"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${testimonial.image}')` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-black/80" />
              </div>

              {/* Content on image */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Author info */}
                <div className="text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-1">{testimonial.author}</h4>
                  <p className="text-sm text-white/90 mb-0.5">{testimonial.role}</p>
                  <p className="text-sm text-white/80">{testimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              <div>
                {/* Quote icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-1.01 1.707-1.336 2.756-.49 2.27-.49 3.65c0 .86.11 1.65.33 2.37.224.725.56 1.35 1.02 1.87.46.52 1.01.924 1.652 1.215.64.29 1.39.437 2.22.437.97 0 1.81-.228 2.52-.686.71-.458 1.26-1.087 1.65-1.888.39-.8.586-1.725.586-2.772zm11.567 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L20.94 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-1.01 1.707-1.336 2.756-.49 2.27-.49 3.65c0 .86.11 1.65.33 2.37.224.725.56 1.35 1.02 1.87.46.52 1.01.924 1.652 1.215.64.29 1.39.437 2.22.437.97 0 1.81-.228 2.52-.686.71-.458 1.26-1.087 1.65-1.888.39-.8.586-1.725.586-2.772z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>

                {/* Project details & Rating */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Project
                    </p>
                    <p className="text-base font-semibold text-neutral-900">
                      {testimonial.project}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {testimonial.stats}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 pt-2">
                    <div className="flex space-x-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-primary fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-neutral-600 ml-2">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative bg-neutral-50 py-16 md:py-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-3"
          >
            Client Voices
          </motion.p>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            See why Seattle homeowners trust us - 5.0 Rating with 17 Reviews!
          </motion.p>
        </motion.div>
      </div>

      {/* Testimonial Cards */}
      <div className="relative space-y-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
}
