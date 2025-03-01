
import "./globals.css"
// import { Inter } from "next/font/google"
import { Metadata } from "next"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Odavolt",
  description:"Odavolt is a social commerce app that enables you to Chat,while buying or selling online within your community",
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
