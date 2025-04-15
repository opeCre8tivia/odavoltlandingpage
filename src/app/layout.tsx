
import "./globals.css"
// import { Inter } from "next/font/google"
import { Metadata } from "next"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Odavolt",
  description:"We enable you to place orders as you chat online with businesses around you",
  twitter:{
    card:"summary_large_image"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body
    >
      {children}
    </body>
  </html>
  )
}
