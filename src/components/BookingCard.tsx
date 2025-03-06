interface Room {
    id: number;
    name: string;
    capacity: number;
  }
  
  const BookingCard = ({ room }: { room: Room }) => {
    return (
      <div className="bg-white p-4 border rounded shadow">
        <h2 className="text-xl">{room.name}</h2>
        <p className="text-gray-600">Capacity: {room.capacity}</p>
        <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
          Book Now
        </button>
      </div>
    );
  };
  
  export default BookingCard;
  