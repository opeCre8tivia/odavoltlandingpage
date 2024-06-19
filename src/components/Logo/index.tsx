import React from "react"

type Props = {
  fill?: string
  width?: number
  height?: number
}

const Logo = ({ fill = "#430658", width = 54, height = 40 }: Props) => {
  return (
    <svg
      data-testid="logo"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 54 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H52.36C54.4544 1.10345 54.1053 3.21839 53.669 4.13793C50.0038 10.7586 45.1605 6.89655 43.197 4.13793H11.781L20.944 26.8966L30.107 6.89655H38.6155L24.871 40H16.3625L0 0Z"
        fill={fill}
      />
    </svg>
  )
}

export default Logo
