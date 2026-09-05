"use client"
import CustomButton from "../CustomButton/CustomButton"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const HeroSection = (props: Props) => {

  
  return (
    <div className="w-full h-auto md:h-[100vh]  bg-white md:flex justify-center items-center p-6">
      
      {/* text */}
      <div className="w-full h-auto md:w-[50%] md:h-full md:min-h-full flex flex-col justify-center items-center">
        <div className="w-full text-[30px] text-gray-800 font-bold text-center">
          Place orders as you chat online with businesses around you
        </div>
        <div className="w-full md:w-[60%] text-center text-[16px] text-gray-600 font-medium ">
          we enable transactions to happen within your conversations 
        </div>

      
         <Link href="https://forms.gle/Xw3oQjNAT5FEqcxk6">
           <Image 
            src="/assets/google-play-badge.png"
            alt="google play store"
            width={250}
            height={250}
            style={{ width: "auto", height: "auto" }}
            loading="eager"
           />
          </Link> 
      
      </div>

      <div className="h-[20px] md:hidden"></div>

      {/* image */}
      <div className=" w-full min-h-[100vh] md:w-[50%] md:h-full md:min-h-full bg-white flex justify-center items-center bg-[url('/img/hero-pattern.webp')]">
        <Image
          alt="odavolt"
          src="/assets/app.png"
          width={250}
          height={250}
          style={{ objectFit: "contain" }}
          loading="eager"
        />
        
      </div>

    </div>
  )
}

export default HeroSection




