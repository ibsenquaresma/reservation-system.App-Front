import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ReservaLocal() {
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const navigate = useNavigate()
  const handleConfirmar = () => {
    alert(`Reserva confirmada das ${horaInicio} às ${horaFim}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Reserva de Local</h2>
      <label className="flex flex-col">
        Hora de Início:
        <input
          type="time"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Hora de Fim:
        <input
          type="time"
          value={horaFim}
          onChange={(e) => setHoraFim(e.target.value)}
          className="border p-2 rounded"
        />
      </label>
      <div className="flex gap-2">
        <button onClick={handleConfirmar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Confirmation</button>
        <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
      </div>
    </div>
  );
}
