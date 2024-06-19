import React from "react"

type Props = {
  placeholder: string
  type?: string
  id?: string
  value: string | number
  onChange: any
}

const CustomTextInput = ({
  placeholder,
  type = "text",
  id,
  value,
  onChange,
}: Props) => {
  return (
    <div className="w-full h-[50px]">
      <input
        value={value}
        onChange={onChange}
        id={id}
        className=" h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default CustomTextInput
