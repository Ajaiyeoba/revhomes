

function PropertyList() {

  const  data = {
  title: "Luxurious 4-Bedroom Villa with Pool",
   type: "Residential",
   listType: "For Sale",
   address: "123 Palm Avenue",
   city: "Los Angeles",
   zipCode: "90001",
   state: "California",
   price: 1200000,
   currency: "USD",
   negotiable: true,
   bedroom: 4,
   bathroom: 3,
   size: "3,200 sq. ft.",
   yearBuilt: 2015,
   status: "Available",
   description: "This elegant villa features modern architecture, a private swimming pool, landscaped garden, and spacious interiors. Located in a serene neighborhood, it's the perfect home for families.",
   images: [
     "https://example.com/image1.jpg",
     "https://example.com/image2.jpg",
     "https://example.com/image3.jpg",
   ],
   agentName: "John Doe",
   phone: "+1-234-567-8901",
   email: "johndoe@realty.com",
   date: "2024-12-21",
 };
 
  return (

    <div>

      <div className='space-y-2'>
        <h2 className="text-4xl font-semibold text-gray-900"> Check out the Property Listed </h2>
        <p className="mt-1 text-sm/6 text-gray-600 ">Listed Properties are either available for sale, lease, or rent</p>
     
     
     
     
      </div>
    </div>
  )
}

export default PropertyList