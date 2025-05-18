"use client";

import React from 'react';
import { codeSnippets } from './data';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CodeSnippetsSection() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
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
              Code <span className="text-primary">Snippets</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my coding style and approach
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="react" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="react" className="font-mono">React Hook</TabsTrigger>
                <TabsTrigger value="algorithm" className="font-mono">Algorithm</TabsTrigger>
                <TabsTrigger value="animation" className="font-mono">Animation</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(codeSnippets).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="code-window">
                    <div className="code-window-header">
                      <div className="code-window-circle bg-destructive/80"></div>
                      <div className="code-window-circle bg-chart-4/80"></div>
                      <div className="code-window-circle bg-primary/80"></div>
                      <div className="ml-2 font-mono text-xs opacity-70">{key === 'react' ? 'useTheme.js' : key === 'algorithm' ? 'binarySearch.js' : 'animation.js'}</div>
                    </div>
                    <div className="code-window-body">
                      <pre className="text-sm overflow-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}