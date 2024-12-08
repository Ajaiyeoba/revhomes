import { properties } from "../assets/assets"

function Property() {
  return (
    <div className="container flex flex-col mx-auto items-center py-4 pt-20 px-6 w-full overflow-hidden ">
      <h2 className="text-2xl mb-2">  Hot Properties For Sale</h2>
      <p className="text-center mb-8 max-w-80">Check out the latest  properties listed  for sale</p>
      <div className="overflow-hidden">
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
          {properties.map((property, index) => (
            <div className=""
              key={index}>
              <img src={property.image} alt={property.title}
                className="w-full h-full mt-14"
              />
              <div>
                <div className="inline-block bg-white w-3/4 px-4 py-4 shadow-md">
                  <h2 className="text-xl text-gray-800">  {property.title}</h2>
                  <p className="text-gray-500 text-sm">{property.price}  <span>{property.area}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Property