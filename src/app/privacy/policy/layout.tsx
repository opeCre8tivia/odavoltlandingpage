
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:"Learn about our privacy policy",
};

export default function Layout({
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