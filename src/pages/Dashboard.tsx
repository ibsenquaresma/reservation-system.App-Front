import { useState } from 'react';
import BookingCard from '../components/BookingCard';

const Dashboard = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room A', capacity: 5 },
    { id: 2, name: 'Room B', capacity: 10 },
    { id: 3, name: 'Room C', capacity: 8 },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <BookingCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
