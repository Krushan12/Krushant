"use client";

import React from 'react';
import Image from 'next/image';
import { projects } from './data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="bg-background/20 backdrop-blur-sm hover:bg-background/40">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="bg-background/20 backdrop-blur-sm hover:bg-background/40">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="pt-6 flex-1">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Button size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}