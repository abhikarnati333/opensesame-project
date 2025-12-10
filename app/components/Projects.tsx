"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Lurna",
            description: "Lurna is a student-centric, AI-powered web application designed to transform the way students interact with their notes. At its core, Lurna helps users take, organize, and automatically generate study material (flashcards, quizzes, summaries, etc.) from their notes. It is currently under active development.",
            image: assets.lurna_img,
            technologies: ["React", "TypeScript", "Python", "OpenAI API", "Tailwind CSS", "FastAPI", "ConvexDB", "+ More"],
            link: "https://lurna.co"
        },
        {
            title: "Deevo",
            description: "Deevo is an AI-powered music platform that generates intelligent, personalized playlists based on user prompts. With a clean interface and one-click Spotify export, Deevo empowers users to discover music in a way that feels natural, creative, and deeply personal.",
            image: assets.deevo_img,
            technologies: ["React", "JavaScript", "Spotify API", "Google Gemini", "Tailwind CSS", "Node.js", "MongoDB", "+ More"],
            link: "https://www.abhikarnati.com/deevo.html"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl tracking-tight">
                        Featured <span className="font-serif italic">Projects</span>
                    </h1>
                </div>

                {/* Projects */}
                <div className="space-y-16 md:space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } gap-8 items-center`}
                        >

                            {/* Project Image */}
                            <motion.div
                                className="w-full md:w-1/2"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div onClick={() => window.open(project.link, '_blank')} className="relative aspect-video rounded-lg overflow-hidden cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </motion.div>

                            {/* Project Info */}
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-3xl font-serif italic">
                                    {project.title}
                                    <ArrowUpRight onClick={()=> window.open(project.link, '_blank')} className="inline-block ml-2 cursor-pointer hover:scale-115 transition-all duration-300" />
                                </h3>
                                

                                <p className="text-lg">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;