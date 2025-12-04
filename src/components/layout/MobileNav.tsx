"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, BookOpen, Settings, User, Globe, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileNav() {
    const pathname = usePathname();
    const { t, language, setLanguage } = useLanguage();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: "dashboard", href: "/" },
        { icon: BookOpen, label: "courses", href: "/courses" },
        { icon: Settings, label: "settings", href: "/settings" },
    ];

    return (
        <>
            {/* Profile/Language Menu Overlay */}
            <AnimatePresence>
                {showProfileMenu && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowProfileMenu(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            className="fixed bottom-20 left-4 right-4 bg-deep-black border border-neon-cyan/30 rounded-xl p-4 z-50 md:hidden shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                        >
                            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-white/10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-magenta p-[1px]">
                                    <div className="w-full h-full rounded-full bg-deep-black flex items-center justify-center">
                                        <User size={24} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-white">CyberStudent</p>
                                    <p className="text-xs text-gray-400">Student ID: #8842</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                    <div className="flex items-center space-x-3 text-gray-300">
                                        <Globe size={18} />
                                        <span>Language</span>
                                    </div>
                                    <div className="flex bg-black rounded p-1">
                                        <button
                                            onClick={() => setLanguage("en")}
                                            className={cn(
                                                "px-3 py-1 rounded text-xs font-medium transition-colors",
                                                language === "en" ? "bg-neon-cyan text-black" : "text-gray-500"
                                            )}
                                        >
                                            EN
                                        </button>
                                        <button
                                            onClick={() => setLanguage("id")}
                                            className={cn(
                                                "px-3 py-1 rounded text-xs font-medium transition-colors",
                                                language === "id" ? "bg-neon-magenta text-black" : "text-gray-500"
                                            )}
                                        >
                                            ID
                                        </button>
                                    </div>
                                </div>

                                <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                                    <LogOut size={18} />
                                    <span>{t("logout")}</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-deep-black/90 backdrop-blur-xl border-t border-white/10 z-50 md:hidden px-6 flex items-center justify-between">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center space-y-1 w-12"
                        >
                            <div className={cn(
                                "p-1.5 rounded-lg transition-all duration-300",
                                isActive ? "text-neon-cyan bg-neon-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.3)]" : "text-gray-500"
                            )}>
                                <item.icon size={20} />
                            </div>
                        </Link>
                    );
                })}

                {/* Profile Toggle */}
                <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex flex-col items-center justify-center space-y-1 w-12"
                >
                    <div className={cn(
                        "p-1.5 rounded-lg transition-all duration-300",
                        showProfileMenu ? "text-neon-magenta bg-neon-magenta/10 shadow-[0_0_10px_rgba(255,0,255,0.3)]" : "text-gray-500"
                    )}>
                        <User size={20} />
                    </div>
                </button>
            </div>
        </>
    );
}
