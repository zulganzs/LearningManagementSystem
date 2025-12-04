"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    BookOpen,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();

    const menuItems = [
        { icon: LayoutDashboard, label: "dashboard", href: "/" },
        { icon: BookOpen, label: "courses", href: "/courses" },
        { icon: User, label: "profile", href: "/profile" },
        { icon: Settings, label: "settings", href: "/settings" },
    ];

    return (
        <motion.aside
            initial={{ width: 240 }}
            animate={{ width: collapsed ? 80 : 240 }}
            className="h-screen sticky top-0 bg-deep-black/80 backdrop-blur-md border-r border-white/10 flex flex-col z-50"
        >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
                {!collapsed && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-mono font-bold text-neon-cyan tracking-wider"
                    >
                        LMS_v1
                    </motion.span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-neon-cyan"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center p-3 rounded-lg transition-all duration-300 group relative overflow-hidden",
                                isActive
                                    ? "bg-white/5 text-neon-cyan border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon
                                size={20}
                                className={cn(
                                    "transition-colors",
                                    isActive ? "text-neon-cyan" : "group-hover:text-neon-magenta"
                                )}
                            />
                            {!collapsed && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="ml-3 font-medium"
                                >
                                    {t(item.label)}
                                </motion.span>
                            )}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-50" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    className={cn(
                        "flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors",
                        collapsed ? "justify-center" : ""
                    )}
                >
                    <LogOut size={20} />
                    {!collapsed && <span className="ml-3">{t("logout")}</span>}
                </button>
            </div>
        </motion.aside>
    );
}
