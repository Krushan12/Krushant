"use client";

import React from 'react';
import { about, experiences } from './data';
import { motion } from 'framer-motion';
import { Clock, Code2, Heart, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="bio" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="bio" className="font-mono">
                <User className="h-4 w-4 mr-2" />
                Bio
              </TabsTrigger>
              <TabsTrigger value="experience" className="font-mono">
                <Clock className="h-4 w-4 mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="interests" className="font-mono">
                <Heart className="h-4 w-4 mr-2" />
                Interests
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bio">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code2 className="h-5 w-5 mr-2 text-primary" />
                      My Story
                    </CardTitle>
                    <CardDescription>
                      The journey that brought me here
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{about.intro}</p>
                    <p>{about.background}</p>
                    <p>{about.philosophy}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="code-window h-full">
                  <div className="code-window-header">
                    <div className="code-window-circle bg-destructive/80"></div>
                    <div className="code-window-circle bg-chart-4/80"></div>
                    <div className="code-window-circle bg-primary/80"></div>
                    <div className="ml-2 font-mono text-xs opacity-70">about.json</div>
                  </div>
                  <div className="code-window-body h-full">
                    <pre className="text-sm">
                      <code>
                        &#123;<br />
                        &nbsp;&nbsp;<span className="code-string">"name"</span>: <span className="code-string">"Krushant Wagh"</span>,<br />
                        &nbsp;&nbsp;<span className="code-string">"title"</span>: <span className="code-string">"Full-Stack Developer"</span>,<br />
                        &nbsp;&nbsp;<span className="code-string">"location"</span>: <span className="code-string">"Maharashtra, India"</span>,<br />
                        &nbsp;&nbsp;<span className="code-string">"education"</span>: &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"degree"</span>: <span className="code-string">"B.Tech in Materials Engineering"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"university"</span>: <span className="code-string">"IIT Gandhinagar"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"year"</span>: <span className="code-number">2025</span><br />
                        &nbsp;&nbsp;&#125;,<br />
                        &nbsp;&nbsp;<span className="code-string">"languages"</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"English"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"JavaScript"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Python"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"TypeScript"</span><br />
                        &nbsp;&nbsp;],<br />
                        &nbsp;&nbsp;<span className="code-string">"hobbies"</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Hiking"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Reading"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Open Source"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Photography"</span><br />
                        &nbsp;&nbsp;],<br />
                        &#125;
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 relative"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-muted-foreground font-mono">{exp.period}</p>
                      <div className="font-medium mt-1">{exp.company}</div>
                    </div>
                    <div className="md:w-2/3 md:pl-6 border-l border-border">
                      <p className="pl-4">{exp.description}</p>
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1/3 top-full h-8 w-px bg-border hidden md:block"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interests">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    Beyond Coding
                  </CardTitle>
                  <CardDescription>
                    What I'm passionate about outside of work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Full-Stack Development</h3>
                      <p>Building complete web applications with React, Node.js, and MongoDB.</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">SaaS Platforms</h3>
                      <p>Creating subscription-based software solutions with modern authentication and payment systems.</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">UI/UX Design</h3>
                      <p>Designing intuitive and responsive user interfaces with Tailwind CSS and modern frameworks.</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Open Source</h3>
                      <p>Contributing to community projects and helping fellow developers.</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">AI Integration</h3>
                      <p>Exploring ways to integrate AI technologies into web applications.</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Materials Engineering</h3>
                      <p>Studying advanced materials and their applications at IIT Gandhinagar.</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground">{about.interests}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}