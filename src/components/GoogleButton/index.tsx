"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Spinner from "../Spinner"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

enum AuthStatus {
  authenticate = "authenticated",
  unAuthenticate = "unauthenticated",
  loading = "loading",
}

const GoogleButton = () => {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)

  const handleSocialAuth = async () => {
    try {
      await signIn("google", { redirect: true })
    } catch (error) {
      console.log(error, "auth err--->")
    }
  }

  useEffect(() => {
    if (status === AuthStatus.loading) {
      setLoading(true)
    } else if (status === AuthStatus.authenticate) {
      setLoading(false)
      redirect("/io/dashboard/overview")
    } else if (status === AuthStatus.unAuthenticate) {
      setLoading(false)
    }
  }, [session, status])

  return (
    <div
      className="w-full h-[60px] border-white border-2 rounded-lg flex gap-2 items-center justify-start px-6"
      onClick={() => handleSocialAuth()}
    >
      <div className="w-fit h-fit">
        <Image
          alt="google logo"
          src="/assets/google.svg"
          width={40}
          height={40}
        />
      </div>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className=" text-lg font-bold text-white">
          Continue with google
        </div>
      )}
    </div>
  )
}

export default GoogleButton
