import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ReservaLocal() {
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const navigate = useNavigate()
  const handleConfirm = () => {
    alert(`Reserva confirmada das ${timeStart} às ${timeEnd}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Reservation</h2>
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
    </div>
  );
}
