import React, { useState, useEffect } from 'react'

type Room = {
  id: number
  name: string
  capacity: number
  available: boolean
  description: string
}

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [page, setPage] = useState<number>(1)
  const roomsPerPage = 3

  // Função para buscar dados da API
  const fetchRooms = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.example.com/rooms') // API real aqui
      const data = await response.json()
      setRooms(data)
    } catch (error) {
      console.error('Error fetching rooms:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRooms()
  }, [])

  const indexOfLastRoom = page * roomsPerPage
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom)

  const paginate = (pageNumber: number) => setPage(pageNumber)

  const handleReserve = (room: Room) => {
    alert(`Room ${room.name} reserved!`) // Simula o botão de reserva
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>
      {loading ? (
        <p>Loading rooms...</p>
      ) : (
        <div className="space-y-4">
          {currentRooms.map((room) => (
            <div
              key={room.id}
              className={`p-4 rounded border ${
                room.available ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p>Capacity: {room.capacity} people</p>
              <p
                className={
                  room.available ? 'text-green-600' : 'text-red-600'
                }
              >
                {room.available ? 'Available' : 'Unavailable'}
              </p>
              <button
                onClick={() => handleReserve(room)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                disabled={!room.available}
              >
                Reserve
              </button>
              <button
                onClick={() => setSelectedRoom(room)}
                className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <button
          onClick={() => paginate(page - 1)}
          disabled={page === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(page + 1)}
          disabled={page * roomsPerPage >= rooms.length}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      {/* Modal de detalhes da sala */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{selectedRoom.name}</h2>
            <p>{selectedRoom.description}</p>
            <button
              onClick={() => setSelectedRoom(null)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rooms
