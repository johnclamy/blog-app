import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})


const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})


export const metadata: Metadata = {
    title: "Minimalist blog website using Next.js",
    description: "Minimalist blog website powered by Next.js version 15.5.28. Build and shares new articles, posts, or updates covering a wide variety of topics",
}


export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
