"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import PageTransition from "./PageTransition";
import MobileNav from "./MobileNav";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <div className="flex h-screen bg-deep-black text-foreground overflow-hidden">
                {/* Desktop Sidebar - Hidden on Mobile */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                <div className="flex-1 flex flex-col overflow-hidden relative">
                    {/* Background Grid Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <TopBar />

                    {/* Main Content - Add bottom padding for mobile nav */}
                    <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative z-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pb-20 md:pb-6">
                        <PageTransition>{children}</PageTransition>
                    </main>

                    {/* Mobile Navigation - Visible only on Mobile */}
                    <MobileNav />
                </div>
            </div>
        </LanguageProvider>
    );
}
