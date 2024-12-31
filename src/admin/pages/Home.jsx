import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className="flex w-full mt-14">
        <Sidebar className='fixed' />
        <div className='flex-1 p-6 ' >
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Home;