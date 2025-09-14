import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"
import Interview from "@/components/Interview"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Interview />
      <About />
      <Footer />
    </main>
  )
}
