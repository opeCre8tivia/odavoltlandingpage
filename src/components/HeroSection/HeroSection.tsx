import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const HeroSection = (props: Props) => {

  
  return (
    <div className="w-full h-auto md:h-[100vh]  bg-white md:flex justify-center items-center p-6">
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
      <div className="w-full h-auto md:min-h-[100vh] md:w-[50%] md:h-full md:min-h-full flex flex-col justify-center items-center">
        <div className="w-full text-[30px] text-gray-800 font-bold text-center">
        Enabling transactions happen within your conversations 
        </div>
        <div className="w-full text-center text-[16px] text-gray-600 font-medium ">
          We are building a revolutionary social commerce platform that bridges the gap between businesses and customers with real-time chat. It goes beyond shopping by tackling food waste
        </div>

      
         <Link href="https://forms.gle/Xw3oQjNAT5FEqcxk6"><CustomButton
            title="Join Waiting List"
            loading={false}
            classes="mt-2"
          />
          </Link> 
      
      </div>
    </div>
  )
}

export default HeroSection
