"use client";

import React from 'react';
import { skills } from './data';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Code2, Server, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    "Tools & Services": Wrench,
  };

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise and professional capabilities
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skills.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.category];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 rounded-lg border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="outline"
                      className="px-3 py-1 text-sm bg-background hover:bg-muted transition-colors duration-200"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}