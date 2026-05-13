import Footer from "./Footer"
import Navbar from "./Navbar"
export default function Layout({ children }) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-4 px-4 max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}