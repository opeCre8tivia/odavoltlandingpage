"use client"
import { SessionProvider } from "next-auth/react"

type Props = {
  children: React.ReactNode
}

const IoProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default IoProvider
