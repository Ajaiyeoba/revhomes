import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className='min-h-screen'>
        <Navbar />
        {/* <h2 className='mx-auto pt-8 text-purple-700 text-4xl mt-12 text-center'>Welcome to revHomes</h2> */}

      <div className="flex w-full mt-14">
        <Sidebar />

        <div className='flex-1 p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home;