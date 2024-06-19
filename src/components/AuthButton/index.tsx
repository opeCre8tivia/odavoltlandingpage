import Image from "next/image"
import React from "react"
import Spinner from "../Spinner"

type Props = {
  onClick: () => void
  loading: boolean
  title: string
  classes?: string
  disabled?: boolean
}

const AuthButton = ({ onClick, loading, title, classes, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      data-testid="auth_btn"
      className={`w-full h-[60px] border-white border-2 rounded-lg flex gap-2 items-center justify-center px-6 ${
        disabled ? "bg-purple-200" : "bg-purple-950"
      } ${classes}`}
    >
      {loading && <Spinner />}
      <div className=" text-lg font-bold text-white">{title}</div>
    </button>
  )
}

export default AuthButton
