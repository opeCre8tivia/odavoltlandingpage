import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import Image from "next/image"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full  h-[100vh]  bg-white md:flex justify-center items-center">
      {/* image */}
      <div className=" w-full min-h-[100vh] md:w-[50%] md:h-full md:min-h-full bg-purple-950 flex justify-center items-center">
        <Image
          alt="odavolt app"
          src="/robert.png"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* text */}
      <div className="w-full min-h-[100vh] md:w-[50%] md:h-full md:min-h-full flex flex-col justify-center items-center">
        <div className="w-full text-[30px] text-gray-800 font-bold text-center">
          We are building <span className="text-purple-950">a family</span>
        </div>
        <div className="w-full text-center text-[16px] text-gray-600 font-medium ">
          Where every member grows to the{" "}
          <span className="underline">full knowledge of christ</span>. Join to
          listen to exclusive teachings from{" "}
          <span className="font-bold">Bishop Robert Ochur</span>
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
