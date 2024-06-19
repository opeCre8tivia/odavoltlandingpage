import React from "react"

type Props = {
  placeholder: string
  id?: string
  value: string
  onChange: any
}

const CustomTextArea = ({ placeholder, id, value, onChange }: Props) => {
  return (
    <textarea
      id={id}
      className=" min-h-[200px] bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default CustomTextArea
