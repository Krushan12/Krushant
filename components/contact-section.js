"use client";

import React, { useState, useRef } from 'react';
import { socialLinks } from './data';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as LucideIcons from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(1, {
    message: "Message is required.",
  }),
});

export default function ContactSection() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    // Show loading state
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('3D14b5nGwxtiXXbiZ');
      
      // Log the form values for debugging
      console.log('Form values:', values);
      
      // Use the send method instead of sendForm to avoid Gmail API authentication issues
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
        to_name: 'Krushant',
        reply_to: values.email
      };
      
      const response = await emailjs.send(
        'service_fttrarr', // Your service ID
        'template_7c41w1k', // Your template ID
        templateParams,     // Template parameters
        '3D14b5nGwxtiXXbiZ' // Your public key
      );
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.", { 
          id: toastId,
          duration: 5000
        });
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.", { 
          id: toastId,
          duration: 5000
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Log more detailed error information
      if (error.text) {
        console.error('Error details:', error.text);
      }
      if (error.status) {
        console.error('Error status:', error.status);
      }
      
      toast.error(`Failed to send message: ${error.text || 'Please try again later.'}`, { 
        id: toastId,
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <div className="flex justify-center">
              <Separator className="w-20 bg-primary" />
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="contact-form">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input name="name" placeholder="Krushant Wagh" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input name="email" placeholder="krushantw@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              name="message"
                              placeholder="I'd like to discuss a project..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-muted p-3 rounded-full">
                    <LucideIcons.MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-muted p-3 rounded-full">
                    <LucideIcons.Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:krushantw@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">krushantw@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-muted p-3 rounded-full">
                    <LucideIcons.PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+918767821091" className="text-muted-foreground hover:text-primary transition-colors">+91 8767821091</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Find Me On</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = LucideIcons[link.icon];
                  return (
                    <a 
                      key={link.name}
                      href={link.url}
                      target={link.name === "Email" ? "" : "_blank"}
                      rel="noreferrer"
                      className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
                      aria-label={link.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}