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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {t("dashboard")}
          </h1>
          <p className="text-gray-400">
            {t("welcome")}, <span className="text-neon-cyan">CyberStudent</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-deep-black border border-neon-cyan/30 rounded-lg p-4 text-center min-w-[120px]">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{t("activeCourses")}</p>
          </div>
          <div className="bg-deep-black border border-neon-magenta/30 rounded-lg p-4 text-center min-w-[120px]">
            <p className="text-2xl font-bold text-white">85%</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{t("completed")}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
