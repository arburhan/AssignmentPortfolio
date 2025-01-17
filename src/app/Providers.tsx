'use client'

import { HeroUIProvider } from "@heroui/react";
import './globals.css';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}