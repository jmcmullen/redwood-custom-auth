import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import { styled } from 'baseui'

const Content = styled('div', {
  height: 'calc(100vh - 240px)',
})

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default DashboardLayout
