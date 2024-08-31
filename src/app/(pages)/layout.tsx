import Navbar from "@/components/fragment/Navbar"
import Footer from "@/components/fragment/Footer"

const Layout = ({ children } : { children : React.ReactNode }) => {
  return (
   <>
      <Navbar />
      {children}
      <Footer />
   </>
  )
}

export default Layout