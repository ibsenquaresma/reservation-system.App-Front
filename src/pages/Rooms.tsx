import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RoomDetail from './RoomDetail' // Importe o componente RoomDetail

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
  const navigate = useNavigate() // Substituindo history.push por useNavigate()


  // Função para buscar dados da API
  // const fetchRooms = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch('https://api.example.com/rooms') // API real aqui
  //     const data = await response.json()
  //     setRooms(data)
  //   } catch (error) {
  //     console.error('Error fetching rooms:', error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  
  // Função mockada para buscar dados
  const fetchRooms = async () => {
    setLoading(true)
    try {
      // Mock de dados
      const data: Room[] = [
        { id: 1, name: 'Room A', capacity: 10, available: true, description: 'Spacious room with a view.' },
        { id: 2, name: 'Room B', capacity: 5, available: false, description: 'Cozy room for small meetings.' },
        { id: 3, name: 'Room C', capacity: 8, available: true, description: 'Modern room with technology.' },
        { id: 4, name: 'Room D', capacity: 12, available: true, description: 'Large conference room.' },
        { id: 5, name: 'Room E', capacity: 6, available: false, description: 'Small room with a projector.' },
        { id: 6, name: 'Room F', capacity: 15, available: true, description: 'Ideal for big presentations.' }
      ]
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

  const handleViewDetails = (room: Room) => {
    setSelectedRoom(room)
    navigate(`/room-detail/${room.id}`) // Usando navigate para redirecionar para os detalhes da sala
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
              className={`p-4 rounded border ${room.available ? 'border-green-500' : 'border-red-500'}`}
            >
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p>Capacity: {room.capacity} people</p>
              <p className={room.available ? 'text-green-600' : 'text-red-600'}>
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
                onClick={() => handleViewDetails(room)}
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
    </div>
  )
}

export default Rooms
