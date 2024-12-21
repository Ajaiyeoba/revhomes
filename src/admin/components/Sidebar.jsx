import { NavLink } from "react-router-dom"
import { PlusCircleIcon, ListCheckIcon } from "lucide-react"
function Sidebar() {
    return (
        <div className="w-[10%] min-h-screen border-r-2">
            <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]  ">
               
                {/* <NavLink to='/admin/add-property' 
                    className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
                    <PlusCircleIcon className="" />
                    <p className="hidden md:block">Add Property  </p>
                </NavLink>

                <NavLink to='/admin/list-property' 
                    className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
                    <ListCheckIcon className="" />
                    <p className="hidden md:block">List Property  </p>
                </NavLink> */}

<NavLink to="/admin/add-property" 
    className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
    <PlusCircleIcon className="" />
    <p className="hidden md:block">Add Property</p>
</NavLink>

<NavLink to="/admin/list-property" 
    className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
    <ListCheckIcon className="" />
    <p className="hidden md:block">List Property</p>
</NavLink>

              

            </div>
        </div>
    )
}

export default Sidebar