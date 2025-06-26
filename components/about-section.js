"use client";

import React from 'react';
import { experiences } from './data';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative pl-6 border-l-2 border-primary hover:border-primary/80 transition-colors"
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0 group-hover:bg-primary/80" />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.period}
                  </p>
                  <p className="text-primary/90 font-medium mt-2">
                    {exp.company}
                  </p>
                </div>
                <div className="md:w-2/3 text-muted-foreground leading-relaxed">
                  <ul className="space-y-2 list-disc pl-4">
                    {exp.points?.map((point, index) => (
                      <li key={index} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}