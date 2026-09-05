import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection />
      <Footer/>
    </main>
  )
}
