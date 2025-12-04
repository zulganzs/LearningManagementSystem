"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function TopBar() {
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <header className="h-16 border-b border-white/10 bg-deep-black/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-sm font-mono">
                <span className="text-gray-500">~/</span>
                <span className="text-neon-cyan">lms</span>
                {pathSegments.map((segment, index) => (
                    <div key={segment} className="flex items-center space-x-2">
                        <span className="text-gray-500">/</span>
                        <span className={cn(
                            index === pathSegments.length - 1 ? "text-white" : "text-gray-400"
                        )}>
                            {segment}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex items-center space-x-6">
                {/* Search */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                        type="text"
                        placeholder={t("search")}
                        className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all w-64"
                    />
                </div>

                {/* Language Switcher */}
                <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                    <button
                        onClick={() => setLanguage("en")}
                        className={cn(
                            "px-3 py-1 rounded-md text-xs font-medium transition-all",
                            language === "en"
                                ? "bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                                : "text-gray-400 hover:text-white"
                        )}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage("id")}
                        className={cn(
                            "px-3 py-1 rounded-md text-xs font-medium transition-all",
                            language === "id"
                                ? "bg-neon-magenta/20 text-neon-magenta shadow-[0_0_10px_rgba(255,0,255,0.2)]"
                                : "text-gray-400 hover:text-white"
                        )}
                    >
                        ID
                    </button>
                </div>

                {/* Notifications */}
                <button className="relative text-gray-400 hover:text-neon-cyan transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-magenta rounded-full shadow-[0_0_5px_#ff00ff]" />
                </button>

                {/* User Profile */}
                <div className="flex items-center space-x-3 pl-6 border-l border-white/10">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">CyberStudent</p>
                        <p className="text-xs text-gray-500">Student</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-magenta p-[1px]">
                        <div className="w-full h-full rounded-full bg-deep-black flex items-center justify-center">
                            <User size={16} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
