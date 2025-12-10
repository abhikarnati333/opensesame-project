"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiDocker,
    SiMongodb,
    SiTailwindcss,
    SiPandas,
    SiPostman,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiSharp,
    SiHtml5,
    SiCss3,
    SiGit
} from 'react-icons/si';
import { DiDatabase, DiJava } from 'react-icons/di';

const Technologies = () => {
    const technologies = [
        { name: "React", icon: SiReact, color: "#61DAFB", size: 80, position: { top: "10%", left: "15%" } },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", size: 70, position: { top: "15%", right: "20%" } },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", size: 90, position: { top: "35%", left: "10%" } },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", size: 75, position: { top: "30%", right: "15%" } },
        { name: "Docker", icon: SiDocker, color: "#2496ED", size: 85, position: { top: "55%", left: "18%" } },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", size: 80, position: { top: "50%", right: "25%" } },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", size: 75, position: { top: "70%", left: "12%" } },
        { name: "Python", icon: SiPython, color: "#3776AB", size: 70, position: { top: "75%", right: "18%" } },
        { name: "Express", icon: SiExpress, color: "#000000", size: 65, position: { top: "25%", left: "45%" } },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", size: 70, position: { top: "45%", left: "48%" } },
        { name: "Git", icon: SiGit, color: "#F05032", size: 75, position: { top: "65%", left: "42%" } },
        { name: "Postman", icon: SiPostman, color: "#FF6C37", size: 70, position: { top: "12%", left: "42%" } },
        { name: "C++", icon: SiCplusplus, color: "#00599C", size: 65, position: { top: "58%", right: "45%" } },
        { name: "C#", icon: SiSharp, color: "#239120", size: 70, position: { top: "82%", left: "48%" } },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", size: 65, position: { top: "18%", right: "42%" } },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", size: 65, position: { top: "42%", right: "38%" } },
        { name: "Java", icon: DiJava, color: "#007396", size: 70, position: { top: "78%", right: "35%" } },
        { name: "Pandas", icon: SiPandas, color: "#150458", size: 75, position: { top: "38%", left: "25%" } },
        { name: "Convex", icon: DiDatabase, color: "#FF6B6B", size: 70, position: { top: "88%", left: "28%" } },
    ];

    return (
        <div className="min-h-screen py-20 px-5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">


                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl tracking-tight">
                        <span className="font-serif italic">Technologies</span> I Work With
                    </h1>
                    <p className="text-md md:text-lg max-w-3xl mx-auto tracking-tight mt-2">
                        Tools and frameworks I use to build modern applications
                    </p>
                </div>

                {/* Scattered Icons Container */}
                <div className="relative w-full h-[600px] md:h-[800px]">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            whileHover={{
                                scale: 1.2,
                                rotate: [0, -10, 10, -10, 0],
                                transition: { duration: 0.5 }
                            }}
                            className="absolute cursor-pointer group"
                            style={{
                                top: tech.position.top,
                                left: tech.position.left,
                                right: tech.position.right,
                            }}
                        >
                            <div className="relative">
                                {/* Icon */}
                                <tech.icon
                                    size={tech.size}
                                    style={{ color: tech.color }}
                                    className="drop-shadow-lg transition-all duration-300"
                                />

                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                                        {tech.name}
                                    </div>
                                    <div className="w-2 h-2 bg-black transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Background Shapes */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl -z-10"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10"
                />
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/3 w-36 h-36 bg-orange-200 rounded-full opacity-20 blur-2xl -z-10"
                />

            </div>
        </div>
    );
};

export default Technologies;