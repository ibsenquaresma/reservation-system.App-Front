import { useParams } from 'react-router-dom';

const RoomDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Room {id} Details</h1>
      <p>Here you can book this room.</p>
    </div>
  );
};

export default RoomDetail;
