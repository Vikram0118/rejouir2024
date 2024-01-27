import Footer from "@/components/shared/Footer"
import NavBar from "@/components/shared/Navbar/NavBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <div className="flex-1 bg-purple-50">{children}</div>
      <Footer />
    </div>
  )
}