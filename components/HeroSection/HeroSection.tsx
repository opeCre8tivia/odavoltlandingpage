"use client"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full h-auto  bg-white flex flex-col md:flex-row justify-center items-stretch p-4 sm:p-6 md:p-10 gap-6 md:gap-0">

      {/* text */}
      <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-md md:max-w-lg text-[26px] sm:text-[32px] md:text-[40px] leading-tight text-gray-800 font-bold text-center">
          Connecting millions of buyers with sellers within their communities
        </div>
        <div className="w-full md:w-[70%] text-center text-base sm:text-lg md:text-xl text-gray-600 font-medium">
          Chat to Buy, Chat to Sell, Chat to Pay.
        </div>

        <Link
          href="https://play.google.com/store/apps/details?id=com.odavolt&pcampaignid=web_share"
          className="mt-2"
        >
          <Image
            src="/assets/google-play-badge.png"
            alt="Get it on Google Play"
            width={250}
            height={74}
            className="w-[170px] sm:w-[200px] md:w-[220px] h-auto"
            loading="eager"
          />
        </Link>
      </div>

      {/* image */}
      <div className="w-full h-auto md:w-1/2 bg-white flex justify-center items-center rounded-2xl md:rounded-none">
        <div className="relative w-[85%] sm:w-[78%] md:w-[80%] max-w-[420px] h-[600px] md:max-w-none aspect-square">
          <Image
            alt="Odavolt app"
            src="/assets/app.png"
            fill
            style={{ objectFit: "contain" }}
            sizes="(min-width: 768px) 60vw, 85vw"
            loading="eager"
          />
        </div>
      </div>

    </div>
  )
}

export default HeroSection