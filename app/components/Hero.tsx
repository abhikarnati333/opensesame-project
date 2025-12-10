import { ChevronDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="w-full max-w-6xl px-5 text-left mx-auto h-screen flex flex-col justify-center gap-4 ">

                <h3 className="flex items-center gap-2 text-lg md:text-2xl mb-3 tracking-tight">
                    Hello <span className="font-serif italic underline underline-offset-2">OpenSesame,</span> I'm
                </h3>
                <h1 className="items-center gap-2 text-4xl md:text-7xl tracking-tight">
                    <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Abhi Karnati</span>, a Full Stack Developer and Designer crafting
                    <span className="italic font-serif"> captivating</span> digital experiences.
                </h1>
            </div>
            <div className='absolute bottom-5 flex justify-center w-full mx-auto'>
                <div className='flex  items-end  gap-2 border-2 border-black px-2 py-1 rounded-full'>
                    Scroll
                    <ChevronDown className='w-5 h-5 animate-bounce' />
                </div>
            </div>
        </>

    )
}

export default Hero