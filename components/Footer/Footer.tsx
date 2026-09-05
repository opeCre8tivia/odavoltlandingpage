import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (

    <footer className="w-full h-auto" >
    <div className="w-full h-[80px] bg-gray-100 flex flex-col justify-center items-center p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="text-gray-600 text-[14px] font-medium">
                    We enable transactions to happen within your conversations
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link href="/privacy/policy" className="text-gray-600 text-[14px] font-medium hover:text-gray-800 transition duration-300">Privacy Policy</Link>
                {/* <Link href="/#" className="text-gray-600 text-[14px] font-medium hover:text-gray-800 transition duration-300">Terms of Service</Link>
                <Link href="#" className="text-gray-600 text-[14px] font-medium hover:text-gray-800 transition duration-300">Contact</Link> */}
            </div>
           <div>
            <div className="text-gray-600 text-[14px] font-medium hover:text-gray-800 transition duration-300" >&copy; 2023 Odavolt. All rights reserved.</div>
           </div>
        </div>
    </div>
</footer>
  )

}

export default Footer;