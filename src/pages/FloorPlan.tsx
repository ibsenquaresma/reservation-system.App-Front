import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FloorPlan() {
  const navigate = useNavigate();

  interface Room {
    name: string;
    capacity: number;
    isOccupied: boolean;
    features?: string[];
  }

  const rooms: Room[] = [
    { 
      name: "Meeting Room", 
      capacity: 10, 
      isOccupied: false,
      features: ["Projector", "Whiteboard", "Video Conferencing"]
    },
    { 
      name: "Conference Room", 
      capacity: 20, 
      isOccupied: true,
      features: ["Large Screen", "Conference Phone", "Catering Available"]
    },
    { 
      name: "Lounge", 
      capacity: 15, 
      isOccupied: false,
      features: ["Comfortable Seating", "Coffee Machine", "Relaxation Area"]
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleReserve = (room: Room) => {
    if (!room.isOccupied) {
      navigate(`/reservation-room/${room.name.toLowerCase().replace(' ', '-')}`, {
        state: {
          roomDetails: room
        }
      });
    }
  };

  const getRoomColor = (isOccupied: boolean) => {
    return isOccupied ? "bg-red-400" : "bg-green-400";
  };

  return (
    <div className="grid grid-cols-6 gap-2 p-4 bg-gray-100 h-screen">
      {/* Layout das salas */}
      {rooms.map((room) => (
        <div
          key={room.name}
          className={`col-span-2 p-4 shadow-lg flex flex-col justify-center items-center border cursor-pointer hover:shadow-xl transition-all ${getRoomColor(room.isOccupied)}`}
          onClick={() => setSelectedRoom(room)}
        >
          <h3 className="font-bold text-lg">{room.name}</h3>
          <p>{room.capacity} people</p>
          <span className={`mt-2 px-2 py-1 rounded-full text-xs ${room.isOccupied ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
            {room.isOccupied ? "Occupied" : "Available"}
          </span>
        </div>
      ))}

      {/* Modal de Detalhes */}
      {selectedRoom && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-2 text-center">{selectedRoom.name}</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold">Capacity</p>
                <p>{selectedRoom.capacity} people</p>
              </div>
              <div className={`p-3 rounded ${selectedRoom.isOccupied ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"}`}>
                <p className="font-semibold">Status</p>
                <p>{selectedRoom.isOccupied ? "Occupied" : "Available"}</p>
              </div>
            </div>

            {selectedRoom.features && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Features:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedRoom.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <button
                className={`flex-1 py-2 px-4 rounded font-medium ${selectedRoom.isOccupied 
                  ? "bg-gray-300 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                onClick={() => handleReserve(selectedRoom)}
                disabled={selectedRoom.isOccupied}
              >
                {selectedRoom.isOccupied ? "Not Available" : "Reserve Now"}
              </button>
              <button
                className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded font-medium"
                onClick={() => setSelectedRoom(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}