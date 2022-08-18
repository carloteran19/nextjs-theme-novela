import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className='container mx-auto px-9'>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}