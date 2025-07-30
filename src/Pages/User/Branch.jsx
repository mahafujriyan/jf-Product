import React, { useState } from 'react';
import ContactUs from '../../Contact/ContactUs';

import ChangeMap from './ChangeMap';
const locations = [
  { id: 1, name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { id: 2, name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
  { id: 3, name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { id: 4, name: "Goa", lat: 15.2993, lng: 74.1240 },
  { id: 5, name: "Mumbai", lat: 19.0760, lng: 72.8777 },
];
const Branch = () => {
      const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    return (
       <div className="">

           <h2 className='max-w-sm bg-[#B0DD1D] rounded-4xl text-center p-3 mx-auto'>Our Branch</h2>
     
            <div className='space-y-6'>
             <div className="flex my-3 flex-wrap gap-5">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(loc)}
            className={`text-sm px-4 py-1 rounded hover:bg-blue-100 ${
              selectedLocation.name === loc.name ? 'bg-blue-500 text-white font-semibold' : 'bg-gray-200'
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>
         <div className='flex flex-col lg:flex-row gap-3 justify-between w-full'>
  <div className='w-1/2'>
    <ContactUs />
  </div>
         <div className="w-full lg:w-1/2">
          {selectedLocation && <ChangeMap selectedLocation={selectedLocation} />}
        </div>

</div>
       </div>
</div>


    );
};

export default Branch;