"use client";

import { motion } from "framer-motion";
import { Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CourseCardProps {
    title: string;
    instructor: string;
    rating: number;
    students: number;
    duration: string;
    image: string;
    category: string;
    color?: "cyan" | "magenta";
}

export default function CourseCard({
    title,
    instructor,
    rating,
    students,
    duration,
    image,
    category,
    color = "cyan",
}: CourseCardProps) {
    const isCyan = color === "cyan";
    const glowColor = isCyan ? "rgba(0,240,255,0.5)" : "rgba(255,0,255,0.5)";
    const borderColor = isCyan ? "border-neon-cyan/30" : "border-neon-magenta/30";
    const textColor = isCyan ? "text-neon-cyan" : "text-neon-magenta";

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className={cn(
                "relative group bg-deep-black border rounded-xl overflow-hidden transition-all duration-300",
                borderColor,
                "hover:shadow-[0_0_20px_var(--glow-color)]"
            )}
            style={{ "--glow-color": glowColor } as React.CSSProperties}
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent z-10" />
                {/* Placeholder for image - using a gradient div if no image provided or for effect */}
                <div className={cn(
                    "w-full h-full bg-gradient-to-br opacity-20",
                    isCyan ? "from-neon-cyan to-blue-900" : "from-neon-magenta to-purple-900"
                )} />

                <div className="absolute top-3 left-3 z-20">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border",
                        borderColor,
                        textColor
                    )}>
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 relative z-20 -mt-10">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors line-clamp-1">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{instructor}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span>{rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Users size={14} />
                            <span>{students}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{duration}</span>
                    </div>
                </div>

                {/* Hover Line */}
                <div className={cn(
                    "absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-500",
                    isCyan ? "from-neon-cyan to-transparent" : "from-neon-magenta to-transparent"
                )} />
            </div>
        </motion.div>
    );
}
