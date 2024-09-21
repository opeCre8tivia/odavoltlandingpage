import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection />
    </main>
  )
}
