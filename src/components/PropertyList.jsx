import { } from "framer-motion/client"
import { projectData } from "../assets/assets"

function PropertyList() {
    return (
        <>

            <div className="container flex flex-col items-center mx-auto py-4 pt-20 px-6 w-full overflow-hidden">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">Properties </h1>
                <p className="text-cente'r mb-8 max-w-80 font-light text-gray-400" > ero minus sed id beatae laboriosam?</p>
            </div>



            {/* <div className="relative p-4 rounded-2xl50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ">
                </div> */}


            <div className="flex gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax())]">
                {projectData.map((project, index) => (
                    <div key={index} className="relative p-4 rounded-2xl bg-gray-900 hover:bg-gray-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">

                        <figure className="rounded-lg overflow-hidden bg-black">
                            <img src={project.image} alt={project.title}
                                className="h-full w-full img-cover" loading="" />
                        </figure>


                        <div className="flex items-center justify-between gap-4">

                        <div>
                                <h2 className="mb-3 ">{project.title}</h2>
                                <p>{project.location}</p>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </>

    )
}

export default PropertyList