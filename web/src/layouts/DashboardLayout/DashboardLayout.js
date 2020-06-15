import Navbar from 'src/components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DashboardLayout
