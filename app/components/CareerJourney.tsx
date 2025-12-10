"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CareerJourney = () => {

    const goals = [
        {
            title: "Full-Stack & AI Engineering",
            description: "I want to become a versatile engineer who can build complete, intelligent applications from the ground up. This means mastering modern frontend frameworks like React and TypeScript, building robust backend systems with Node.js, and integrating AI capabilities like LLMs, embeddings, and vector search. I'm excited about creating products where AI isn't just a feature—it's fundamental to the user experience.",
            bgColor: "bg-pink-300"
        },
        {
            title: "System Design & DevOps",
            description: "I want to understand how large-scale systems are architected, deployed, and maintained. This includes diving deep into cloud infrastructure (AWS, Terraform), containerization (Docker), CI/CD pipelines, and monitoring systems. I'm fascinated by the challenge of building systems that can handle millions of users while remaining reliable, scalable, and cost-effective.",
            bgColor: "bg-orange-300"
        },
        {
            title: "Real-World Impact",
            description: "I'm not interested in building toys—I want to create products that solve real problems for real people. Whether it's helping students learn more effectively, enabling teams to collaborate better, or automating tedious workflows, I want my work to make a tangible difference at scale.",
            bgColor: "bg-blue-300"
        },
        {
            title: "Collaborative Growth",
            description: "I believe the best engineers are those who learn continuously and grow through collaboration. Pair programming, code reviews, and XP methodologies aren't just processes—they're opportunities to share knowledge, challenge assumptions, and build better software together. I thrive in environments where teaching and learning are part of the daily rhythm.",
            bgColor: "bg-green-300"
        }
    ];

    const whyOpenSesame = [
        {
            title: "XP Culture & Pair Programming",
            description: "I thrive in collaborative environments where continuous learning and feedback drive excellence. OpenSesame's XP practices align perfectly with how I want to grow as an engineer."
        },
        {
            title: "Modern Tech Stack",
            description: "TypeScript, React, Terraform, AWS, CI/CD—these are the exact technologies I'm passionate about mastering. OpenSesame offers hands-on experience with the full modern development ecosystem."
        },
        {
            title: "AI-Powered Innovation",
            description: "Working on AI-driven internal tools and workflows is where I see the future of SaaS. OpenSesame is at the forefront of integrating AI into production systems."
        },
        {
            title: "Scale & Real Operations",
            description: "I want to understand how large-scale SaaS products operate—from infrastructure to deployment pipelines. OpenSesame serves 2,000+ companies including Global 2000 enterprises."
        },
        {
            title: "Culture Over Industry",
            description: "I'm looking for a fast-paced, innovation-driven engineering team, not a corporate bureaucracy. OpenSesame's remote-first, agile culture is exactly what I value."
        },
        {
            title: "Multi-Disciplinary Exposure",
            description: "From software development to DevOps to AI integration—OpenSesame offers the cross-functional experience I need to become a well-rounded engineer."
        }
    ];

    return (
        <div className="min-h-screen  py-20 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl tracking-tight">
                        My Career <span className="font-serif italic">Journey</span>
                    </h1>
                    <p className="text-md md:text-lg max-w-3xl mx-auto tracking-tight mt-2">
                        and Why OpenSesame is the Perfect Next Step
                    </p>
                </div>

                {/* Long-Term Goals */}
                <div className="mb-20">
                    <h3 className="text-3xl mb-8">
                        Where I'm <span className="font-serif italic">Headed</span>
                    </h3>
                    <div className="flex flex-col gap-6">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ 
                                    opacity: 0, 
                                    x: index % 2 === 0 ? -100 : 100 
                                }}
                                whileInView={{ 
                                    opacity: 1, 
                                    x: 0 
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut",
                                    delay: index * 0.1 
                                }}
                                whileHover={{ scale: 1.02 }}
                                className={`${goal.bgColor} p-6 md:p-8 rounded-4xl shadow-lg border-2 border-black transition-shadow duration-300 ${
                                    index % 2 === 0 ? 'md:mr-auto md:max-w-2xl' : 'md:ml-auto md:max-w-2xl'
                                }`}
                            >
                                <h4 className="text-2xl font-serif italic mb-3 ">{goal.title}</h4>
                                <p className="">{goal.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why OpenSesame */}
                <div>
                    <h3 className="text-3xl mb-4 ">
                        Why OpenSesame Fits <span className="font-serif italic">My Story</span>
                    </h3>
                    <p className="text-xl  mb-8">
                        OpenSesame is the exact environment where I can transform from a capable developer into the AI-forward, full-stack engineer I aspire to be.
                    </p>

                    <div className="space-y-6">
                        {whyOpenSesame.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-[#ffcc85] border-2 border-black p-6 rounded-4xl"
                            >
                                <h4 className="text-2xl mb-2 font-serif italic">{reason.title}</h4>
                                <p className="">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <p className="text-md md:text-lg tracking-tight leading-tight">
                        Bottom Line: I'm not looking for just any internship. I'm looking for a place where engineering excellence, collaborative culture, and cutting-edge technology intersect. And I think that place is{" "}
                        <span className="font-serif italic">
                            OpenSesame.
                        </span>
                    </p>
                </div>



            </div>
        </div>
    );
};

export default CareerJourney;