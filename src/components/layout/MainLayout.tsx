"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import PageTransition from "./PageTransition";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <div className="flex h-screen bg-deep-black text-foreground overflow-hidden">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    {/* Background Grid Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <TopBar />
                    <main className="flex-1 overflow-y-auto p-6 relative z-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <PageTransition>{children}</PageTransition>
                    </main>
                </div>
            </div>
        </LanguageProvider>
    );
}
