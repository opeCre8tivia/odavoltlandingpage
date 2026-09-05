import Image from "next/image"


const Header=()=>{

    return(

        <div className="w-full h-[80px] shadow-sm bg-white border-b-2 border-gray-100 flex justify-start items-center">
          {/* logo */}
          <div className="px-4">
          <Image
          alt="odavolt logo"
          src="/logo.svg"
          width={100}
          height={50}
          style={{ objectFit: "contain" }}
        />
          </div>
          {/* other */}
          <div></div>
        </div>
    )
}

export default Header