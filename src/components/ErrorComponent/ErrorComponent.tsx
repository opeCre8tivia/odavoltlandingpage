import React from "react"
import { AiFillCloseCircle, AiFillExclamationCircle } from "react-icons/ai"

type Props = {
  text: string
  onClick?: () => void
}

const ErrorComponent = ({ text, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[50%] w-fit h-[60px] bg-red-500 flex justify-between items-center px-6"
    >
      <div className="text-white text-lg">{text}</div>
      <AiFillCloseCircle color="#ffffff" size={30} className="mx-2" />
    </div>
  )
}

export default ErrorComponent
