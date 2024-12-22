import { GlobeLockIcon, FactoryIcon , SailboatIcon, FerrisWheelIcon, CloudDownloadIcon } from "lucide-react"

function Brands() {
  return (
    <div className=" container  text-gray-900 flex flex-col items-center mx-auto ">
            <div className="flex flex-wrap justify-center gap-8">
                    <GlobeLockIcon   className="w-12"/>
                    <FactoryIcon  className="w-12"/>
                    <SailboatIcon  className="w-12"/>
                    <FerrisWheelIcon  className="w-12"/>
                    <CloudDownloadIcon  className="w-12"/>
            </div>


    </div>
  )
}

export default Brands;