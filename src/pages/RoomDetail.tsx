import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

type Room = {
  id: number
  name: string
  capacity: number
  available: boolean
  description: string
}

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>() // Pegando o id da URL
  const navigate = useNavigate()
  const [room, setRoom] = useState<Room | null>(null)

  useEffect(() => {
    if (id) {
      // Mock de dados para procurar a sala com o id
      const rooms: Room[] = [
        { id: 1, name: 'Room A', capacity: 10, available: true, description: 'Spacious room with a view.' },
        { id: 2, name: 'Room B', capacity: 5, available: false, description: 'Cozy room for small meetings.' },
        { id: 3, name: 'Room C', capacity: 8, available: true, description: 'Modern room with technology.' },
        { id: 4, name: 'Room D', capacity: 12, available: true, description: 'Large conference room.' },
        { id: 5, name: 'Room E', capacity: 6, available: false, description: 'Small room with a projector.' },
        { id: 6, name: 'Room F', capacity: 15, available: true, description: 'Ideal for big presentations.' }
      ]

      const foundRoom = rooms.find((room) => room.id === parseInt(id))
      setRoom(foundRoom || null)
    }
  }, [id])

  const handleBack = () => {
    navigate(-1) // Volta para a página anterior
  }

  const handleBook = () => {
    alert('Room booked!')
  }

  return (
    <div className="p-6">
      {room ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
          <p className="mb-4">{room.description}</p>
          <p>Capacity: {room.capacity} people</p>
          <p className={room.available ? 'text-green-600' : 'text-red-600'}>
            {room.available ? 'Available' : 'Unavailable'}
          </p>
          <div className="mt-4">
            <button
              onClick={handleBook}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              disabled={!room.available}
            >
              Book Room
            </button>
            <button
              onClick={handleBack}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <p>Room not found</p>
      )}
    </div>
  )
}

export default RoomDetail
