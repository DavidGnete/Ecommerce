"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navigation from "../components/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

     const hideNavbarRoutes = ["/"];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

    return(
        <html lang="en">
            <body>
            {!shouldHideNavbar &&  <Navigation />}
                {children}
            </body>
        </html>
    );
}