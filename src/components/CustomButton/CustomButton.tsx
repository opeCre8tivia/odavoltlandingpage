import React from "react"

type Props = {
  onClick?: () => void
  loading: boolean
  title: string
  classes?: string
  disabled?: boolean
}

const CustomButton = ({
  onClick,
  loading,
  title,
  classes,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      data-testid="custom_btn"
      className={`min-w-[150px] h-[60px] border-white border-2 rounded-lg flex gap-2 items-center justify-center px-6 ${
        disabled ? "bg-purple-200" : "bg-purple-950"
      } ${classes}`}
    >
      {loading ? (
          <div></div>
      ) : (
        <div className=" text-sm font-bold text-white whitespace-pre">
          {title}
        </div>
      )}
    </button>
  )
}

export default CustomButton
