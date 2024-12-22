import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import "@stream-io/video-react-sdk/dist/css/styles.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import "react-datepicker/dist/react-datepicker.css";


import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const ubuntu = Ubuntu({
  weight: ['300','500',"400","700"], 
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "LoopCall",
  description: "A Video Streaming Applications for Virtual Meetups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/logo.png",
      },
      variables: {
        colorText: "#fff",
        colorPrimary: "#0E78F9",
        colorBackground: "#000c27ec",
        colorInputBackground: "#252A41",
        colorInputText: "#fff",
      },
    }} 
    >
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={`bg-dark-2 text-white ${ubuntu.className}`}>
        {children}
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
