// import React from 'react'

// const About: React.FC = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">About Us</h1>
//       <p>This system helps you reserve rooms efficiently and easily.</p>
//     </div>
//   )
// }

// export default About
export default function FloorPlan() {
  return (
    <div className="grid grid-cols-6 gap-2 p-4 bg-gray-100 h-screen">
      {/* Open Space */}
      <div className="col-span-3 row-span-2 bg-white p-4 shadow-lg flex justify-center items-center border">
        Open Space
      </div>
      
      {/* Private Offices */}
      <div className="col-span-2 row-span-1 bg-white p-4 shadow-lg flex justify-center items-center border">
        Private Offices
      </div>
      <div className="col-span-1 row-span-1 bg-white p-4 shadow-lg flex justify-center items-center border">
        Meeting Room
      </div>
      
      {/* Elevators and Circulation */}
      <div className="col-span-6 row-span-1 bg-gray-200 p-4 shadow-lg flex justify-center items-center border">
        Circulation & Elevators
      </div>
      
      {/* Conference Room */}
      <div className="col-span-2 row-span-1 bg-white p-4 shadow-lg flex justify-center items-center border">
        Conference Room
      </div>
      
      {/* Reception */}
      <div className="col-span-2 row-span-1 bg-white p-4 shadow-lg flex justify-center items-center border">
        Reception
      </div>
      
      {/* Lounge */}
      <div className="col-span-2 row-span-1 bg-white p-4 shadow-lg flex justify-center items-center border">
        Lounge
      </div>
    </div>
  );
}

