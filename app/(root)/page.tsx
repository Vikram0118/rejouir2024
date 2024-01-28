import FormLayout from "@/components/shared/FormLayout";
import Hero from "@/components/shared/Hero";
import { About } from "@/components/shared/About";
import { Events } from "@/components/shared/Events";
import { Counter } from "@/components/shared/Counter/Counter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Counter />
      <About />
      <Events />
      <FormLayout />
    </main>
  );
}
