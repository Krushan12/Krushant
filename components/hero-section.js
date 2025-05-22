"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, FileCode2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 grid-bg z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <p className="text-primary font-mono">&gt; Hello, World!</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                I'm <span className="text-gradient">Krushant Wagh</span>
              </h1>
              <div className="text-xl md:text-2xl font-mono text-foreground/80 h-16 md:h-12">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000,
                    'React.js Developer',
                    1000,
                    'Next.js Developer',
                    1000,
                    'Materials Engineering Student',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block"
                />
                <span className="inline-block animate-cursor-blink">|</span>
              </div>
            </div>

            <p className="text-muted-foreground max-w-lg">
              B.Tech student at IIT Gandhinagar with a passion for web development.
              Specialized in building modern web applications with React.js, Next.js, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <a href="#projects">
                  <FileCode2 className="mr-2 h-4 w-4" />
                  View My Work
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                asChild
              >
                <a href="https://drive.google.com/file/d/1fB8Kvp3_J4CdUNWVIPhYQUz8N_uWO-Zd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/Krushan12" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/krushant-wagh-703688228" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              
              <a href="https://x.com/KrushantW32342" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="code-window">
              <div className="code-window-header">
                <div className="code-window-circle bg-destructive/80"></div>
                <div className="code-window-circle bg-chart-4/80"></div>
                <div className="code-window-circle bg-primary/80"></div>
                <div className="ml-2 font-mono text-xs opacity-70">developer.js</div>
              </div>
              <div className="code-window-body">
                <pre className="text-sm">
                  <code>
                    <span className="code-keyword">class</span> <span className="code-class">Developer</span> &#123;<br />
                    &nbsp;&nbsp;<span className="code-keyword">constructor</span>() &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">this</span>.<span className="code-variable">name</span> <span className="code-operator">=</span> <span className="code-string">"Krushant Wagh"</span>;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">this</span>.<span className="code-variable">traits</span> <span className="code-operator">=</span> [<span className="code-string">"creative"</span>, <span className="code-string">"detail-oriented"</span>, <span className="code-string">"problem-solver"</span>];<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">this</span>.<span className="code-variable">skills</span> <span className="code-operator">=</span> &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">frontend</span>: [<span className="code-string">"React.js"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"Tailwind CSS"</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">backend</span>: [<span className="code-string">"Node.js"</span>, <span className="code-string">"Express.js"</span>, <span className="code-string">"MongoDB"</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">services</span>: [<span className="code-string">"Clerk"</span>, <span className="code-string">"Stripe"</span>, <span className="code-string">"Cloudinary"</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;;<br />
                    &nbsp;&nbsp;&#125;<br /><br />
                    &nbsp;&nbsp;<span className="code-function">code</span>() &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">console</span>.<span className="code-function">log</span>(<span className="code-string">"✨ Creating something amazing..."</span>);<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">"Clean, efficient, and maintainable solutions"</span>;<br />
                    &nbsp;&nbsp;&#125;<br /><br />
                    &nbsp;&nbsp;<span className="code-function">solveProblems</span>() &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// Always looking for elegant solutions</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while</span>(<span className="code-variable">problems</span>.<span className="code-function">exist</span>()) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">problems</span> <span className="code-operator">=</span> <span className="code-variable">problems</span>.<span className="code-function">solve</span>();<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;<br /><br />
                    <span className="code-keyword">const</span> <span className="code-variable">me</span> <span className="code-operator">=</span> <span className="code-keyword">new</span> <span className="code-class">Developer</span>();<br />
                    <span className="code-variable">me</span>.<span className="code-function">code</span>();<br />
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center animate-bounce">
        <a href="#about" className="text-primary">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}