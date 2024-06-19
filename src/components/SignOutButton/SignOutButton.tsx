"use client"
import { signOut, useSession } from "next-auth/react"

type Props = {}

const SignOutButton = (props: Props) => {
  const { data: session, status } = useSession()

  const handleSigningOut = () => {
    if (status === "authenticated") {
      signOut({ callbackUrl: "/io/auth/login" })
    }
  }

  return (
    <div
      className="w-[200px] h-[50px] bg-gray-300 flex justify-center items-center"
      onClick={() => handleSigningOut()}
    >
      Sign Out
    </div>
  )
}

export default SignOutButton
