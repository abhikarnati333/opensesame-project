"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AIExcitement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "AI + Automation",
            shortDesc: "AI can eliminate repetitive workflows, supercharge productivity, and create new systems.",
            longDesc: "The most exciting part of AI isn't just what it can do—it's how it can fundamentally transform how we work. AI can eliminate the tedious, repetitive tasks that drain engineering time, allowing teams to focus on creative problem-solving and innovation. From automating code reviews to generating documentation, AI empowers developers to work smarter, not harder. It's about building intelligent systems that scale with your needs and continuously improve over time.",
            bgColor: "bg-purple-300"
        },
        {
            title: "Smarter Engineering Tools",
            shortDesc: "AI-assisted deployment, intelligent CI pipelines, automated QA, and AI-driven monitoring.",
            longDesc: "Imagine a world where deployments are guided by AI that predicts potential failures before they happen. Where CI/CD pipelines automatically optimize themselves based on historical data. Where QA doesn't just catch bugs—it anticipates them. AI-driven monitoring can detect anomalies in real-time, alert teams proactively, and even suggest fixes. These aren't just improvements—they're game-changers that make engineering teams faster, more reliable, and more confident in their releases.",
            bgColor: "bg-cyan-300"
        },
        {
            title: "Personalized Knowledge Systems",
            shortDesc: "AI can give teams instant insights, reduce onboarding time, and support skill growth internally.",
            longDesc: "What if every engineer had an AI assistant that knew the entire codebase, understood team conventions, and could answer questions instantly? AI-powered knowledge systems can dramatically reduce onboarding time for new hires, provide contextual documentation on demand, and help teams discover best practices they didn't know existed. It's like having a senior engineer available 24/7 to guide, teach, and accelerate learning across the organization.",
            bgColor: "bg-yellow-300"
        },
        {
            title: "Human-AI Collaboration",
            shortDesc: "Solving problems with AI, not replacing humans.",
            longDesc: "I'm not interested in AI replacing engineers—I'm excited about AI amplifying what engineers can do. The best outcomes happen when humans and AI collaborate: humans bring creativity, intuition, and context, while AI brings speed, pattern recognition, and tireless processing power. Together, they can tackle problems neither could solve alone. It's about augmenting human capability, not replacing it, and building tools that make engineers more effective, more fulfilled, and more impactful.",
            bgColor: "bg-green-300"
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="min-h-screen bg-white py-20 px-5">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl tracking-tight">
                        What <span className="font-serif italic">Excites</span> Me About AI
                    </h1>
                    <p className="text-md md:text-lg max-w-3xl mx-auto tracking-tight mt-2">
                        How AI can transform engineering and product development
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">

                    {/* Main Carousel */}
                    <div className="relative min-h-[500px] md:min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`${slides[currentIndex].bgColor} p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-black`}
                            >
                                <h3 className="text-3xl mb-4 font-serif italic">
                                    {slides[currentIndex].title}
                                </h3>
                                <p className="text-lg  font-medium mb-4 ">
                                    {slides[currentIndex].shortDesc}
                                </p>
                                <p className="text-base md:text-lg text-gray-900">
                                    {slides[currentIndex].longDesc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-6">
                        <button
                            onClick={handlePrev}
                            className="bg-white hover:bg-gray-100 p-2 rounded-full border-2 border-black transition-all hover:scale-105 cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-blue-500'
                                            : 'w-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="bg-white hover:bg-gray-100 p-2 rounded-full border-2 border-black transition-all hover:scale-105 cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AIExcitement;