import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CenteredAlert from '../components/Alert';

export default function ReservaLocal() {
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [showAlert, setShowAlert] = useState("");
  const { roomId, userId } = useParams();
  const navigate = useNavigate();
  
  const handleConfirm = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startTime: timeStart,
          endTime: timeEnd,
          roomId: Number(roomId),
          userId: Number(userId)
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowAlert(`Reservation confirmed from ${timeStart} to ${timeEnd}`);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setShowAlert(data.message || 'Reservation failed');
      }
    } catch (error) {
      console.error('Reservation error:', error);
      setShowAlert("Something went wrong during reservation.");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Reservation</h2>

      <div className="text-sm text-gray-600">
        Room ID from URL: <strong>{roomId}</strong>
      </div>

      <div className="text-sm text-gray-600">
        User ID from URL: <strong>{userId}</strong>
      </div>

      <label className="flex flex-col">
        Start Time:
        <input
          type="time"
          value={timeStart}
          onChange={(e) => setTimeStart(e.target.value)}
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        End Time:
        <input
          type="time"
          value={timeEnd}
          onChange={(e) => setTimeEnd(e.target.value)}
          className="border p-2 rounded"
        />
      </label>
      <div className="flex gap-2">
        <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Confirmation</button>
        <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
      </div>

      {showAlert && (
        <CenteredAlert
          message={showAlert}
          onClose={() => setShowAlert("")}
        />
      )}
    </div>
  );
}