import Footer from "@/components/shared/Footer"
import FormLayout from "@/components/shared/FormLayout"
import NavBar from "@/components/shared/NavBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
            {/* <FormLayout /> */}
      <NavBar />
      <div className="flex-1 bg-contain bg-purple-50">{children}</div>
      <Footer />
    </div>
  )
}