import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import Image from "next/image"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full  h-[100vh]  bg-white md:flex justify-center items-center">
      {/* image */}
      <div className=" w-full min-h-[100vh] md:w-[50%] md:h-full md:min-h-full bg-white flex justify-center items-center bg-[url('/img/hero-pattern.webp')]">
        <Image
          alt="odavolt app"
          src="/app.png"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* text */}
      <div className="w-full min-h-[100vh] md:w-[50%] md:h-full md:min-h-full flex flex-col justify-center items-center">
        <div className="w-full text-[30px] text-gray-800 font-bold text-center">
        Enabling transactions happen within your conversations 
        </div>
        <div className="w-full text-center text-[16px] text-gray-600 font-medium ">
          We're building a revolutionary social commerce platform that bridges the gap between businesses and customers with real-time chat. It goes beyond shopping by tackling food waste
        </div>

      
          <CustomButton
            title="DOWNLOAD ANDROID APP"
            loading={false}
            classes="mt-2"
          />
      
      </div>
    </div>
  )
}

export default HeroSection
