"use client";

import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: "Advanced Cyber Security",
      instructor: "Dr. A. Neo",
      rating: 4.9,
      students: 1234,
      duration: "12h 30m",
      category: "Security",
      image: "/course1.jpg",
      color: "cyan" as const,
    },
    {
      id: 2,
      title: "Neon UI Design Systems",
      instructor: "Sarah Cyber",
      rating: 4.8,
      students: 856,
      duration: "8h 15m",
      category: "Design",
      image: "/course2.jpg",
      color: "magenta" as const,
    },
    {
      id: 3,
      title: "Full Stack Holo-Dev",
      instructor: "Mike Matrix",
      rating: 4.7,
      students: 2341,
      duration: "24h 00m",
      category: "Development",
      image: "/course3.jpg",
      color: "cyan" as const,
    },
    {
      id: 4,
      title: "AI Neural Networks",
      instructor: "Bot X-99",
      rating: 5.0,
      students: 567,
      duration: "18h 45m",
      category: "AI",
      image: "/course4.jpg",
      color: "magenta" as const,
    },
    {
      id: 5,
      title: "Quantum Computing 101",
      instructor: "Q. Bit",
      rating: 4.6,
      students: 982,
      duration: "10h 20m",
      category: "Science",
      image: "/course5.jpg",
      color: "cyan" as const,
    },
    {
      id: 6,
      title: "Blockchain Architecture",
      instructor: "Crypto King",
      rating: 4.8,
      students: 1543,
      duration: "16h 10m",
      category: "Finance",
      image: "/course6.jpg",
      color: "magenta" as const,
    },
  ];

  return (
    <div className="space-y-[clamp(1.5rem,2.5vw,2rem)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-2 tracking-tight">
            {t("dashboard")}
          </h1>
          <p className="text-gray-400 text-[clamp(0.875rem,1vw,1rem)]">
            {t("welcome")}, <span className="text-neon-cyan">CyberStudent</span>
          </p>
        </div>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="bg-deep-black border border-neon-cyan/30 rounded-lg p-[clamp(0.75rem,1vw,1rem)] text-center min-w-0 flex-1 md:flex-none md:min-w-[120px]">
            <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-white">12</p>
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] text-gray-500 uppercase tracking-wider truncate">{t("activeCourses")}</p>
          </div>
          <div className="bg-deep-black border border-neon-magenta/30 rounded-lg p-[clamp(0.75rem,1vw,1rem)] text-center min-w-0 flex-1 md:flex-none md:min-w-[120px]">
            <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-white">85%</p>
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] text-gray-500 uppercase tracking-wider truncate">{t("completed")}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col min-w-0"
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
