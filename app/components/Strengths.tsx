"use client";

import React from 'react';

const Strengths = () => {
    const strengths = [
        {
            number: 1,
            title: "AI Engineering Mindset",
            color: "pink",
            bgColor: "bg-pink-300",
            bgLightColor: "bg-pink-200",
            rotation: "rotate-[-4deg]",
            hoverRotation: "hover:rotate-[-2deg]",
            points: [
                "- Built AI-powered apps (Lurna, Deevo)",
                "- Understand LLM prompting, embeddings, vector search",
                "- Think about AI product UX"
            ]
        },
        {
            number: 2,
            title: "Full-Stack Engineering",
            color: "orange",
            bgColor: "bg-orange-300",
            bgLightColor: "bg-orange-200",
            rotation: "rotate-[2deg]",
            hoverRotation: "hover:rotate-[4deg]",
            points: [
                "- React, TypeScript, Node",
                "- Tailwind UI components",
                "- REST APIs, auth flows",
                "- Building fast, clean frontends"
            ]
        },
        {
            number: 3,
            title: "DevOps Awareness",
            color: "blue",
            bgColor: "bg-blue-300",
            bgLightColor: "bg-blue-200",
            rotation: "rotate-[-3deg]",
            hoverRotation: "hover:rotate-[-1deg]",
            points: [
                "- Experience with Docker and CI/CD basics",
                "- Comfortable reading Cloud architecture",
                "- Focused on reliability + scalability"
            ]
        },
        {
            number: 4,
            title: "Collaboration & Execution",
            color: "green",
            bgColor: "bg-green-300",
            bgLightColor: "bg-green-200",
            rotation: "rotate-[3deg]",
            hoverRotation: "hover:rotate-[5deg]",
            points: [
                "- Led project teams (like Lurna)",
                "- Good communication and pair programming fit",
                "- Go from idea → build → ship fast"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20 px-5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl tracking-tight">
                        What I Can <span className="font-serif italic">Bring</span>
                    </h1>
                    <p className="text-md md:text-lg max-w-3xl mx-auto tracking-tight mt-2">
                        My Key Strengths for Excelling at OpenSesame
                    </p>
                </div>

                {/* Strength Cards */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-7xl mx-auto mb-10">
                    {strengths.map((strength, index) => (
                        <div
                            key={index}
                            className={`relative w-full lg:w-[380px] h-[300px] lg:h-[340px] rounded-3xl ${strength.bgColor} shadow-2xl transform ${strength.rotation} transition-all duration-300 ${strength.hoverRotation} hover:scale-105 hover:z-30 p-8 md:p-10 flex flex-col justify-center ${index === 0 ? 'z-10 -mb-8 md:mb-0 md:-mr-8' :
                                    index === 1 ? 'z-20 -mb-8 md:mb-0 md:-mr-8' :
                                        index === 2 ? 'z-10 -mb-8 md:mb-0 md:-mr-8' :
                                            'z-10'
                                } border-2 border-black cursor-pointer`}
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div className={`font-bold rounded-full p-1 px-3 ${strength.bgLightColor} flex items-center justify-center text-xl`}>
                                    {strength.number}
                                </div>
                                <h3 className="font-serif italic text-3xl">{strength.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {strength.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-base md:text-lg tracking-tight flex items-start gap-2">
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Strengths;