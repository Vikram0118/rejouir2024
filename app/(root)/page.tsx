import Hero from '@/components/shared/Hero'
import { About } from '@/components/shared/About'
import { Events } from '@/components/shared/Events/Events'
import { Counter } from '@/components/shared/Counter/Counter'
import Navbar from '@/components/shared/Navbar/NavBar'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Counter />
      <About />
      <Events />
    </main>
  )
}
