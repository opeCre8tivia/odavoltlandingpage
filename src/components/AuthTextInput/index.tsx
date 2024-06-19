import React, { ChangeEventHandler, ReactEventHandler } from "react"

type Props = {
  placeholder?: string
  value: string | number
  onChange: (e: any) => void
  lable?: string
  type?: string
  id?: string
}

const AuthTextInput = ({
  placeholder,
  onChange,
  value,
  lable,
  type,
  id,
}: Props) => {
  return (
    <div className="w-full h-fit my-2">
      {lable && (
        <label
          htmlFor="text_field"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {lable}
        </label>
      )}
      <input
        onChange={onChange}
        value={value}
        id={id}
        className=" h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default AuthTextInput
