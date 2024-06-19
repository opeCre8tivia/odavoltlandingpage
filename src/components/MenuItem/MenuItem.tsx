"use client"

import Link from "next/link"
import { IconType } from "react-icons"
import { useRouter, usePathname } from "next/navigation"

type Props = {
  href: string
  title: string
  Icon: IconType
}

const MenuItem = ({ href, title, Icon }: Props) => {
  const _name = usePathname()

  console.log(_name, "-----> router", href)
  return (
    <Link href={href}>
      <div
        className={`w-[200px] h-[50px] flex  items-center gap-2 hover:border-r-4 hover:border-r-purple-950 hover:bg-[#f3f3f3] ${
          href === _name
            ? "border-r-4 border-r-purple-950 bg-[#f3f3f3]"
            : "border-r-[#f3f3f3]"
        }`}
      >
        {/* icon */}
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <Icon size={30} />
        </div>
        {/* title */}
        <div className="text-gray-500 text-[16px] font-bold">{title}</div>
      </div>
    </Link>
  )
}

export default MenuItem
