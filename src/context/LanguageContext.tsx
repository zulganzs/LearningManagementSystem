"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        dashboard: "Dashboard",
        courses: "Courses",
        settings: "Settings",
        profile: "Profile",
        logout: "Logout",
        search: "Search...",
        welcome: "Welcome back",
        activeCourses: "Active Courses",
        completed: "Completed",
        hours: "hours",
    },
    id: {
        dashboard: "Dasbor",
        courses: "Kursus",
        settings: "Pengaturan",
        profile: "Profil",
        logout: "Keluar",
        search: "Cari...",
        welcome: "Selamat datang kembali",
        activeCourses: "Kursus Aktif",
        completed: "Selesai",
        hours: "jam",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations["en"]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
