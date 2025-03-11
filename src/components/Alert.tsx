import { useEffect, useState } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const CenteredAlert: React.FC<AlertProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Fecha após 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold">{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
      </div>
    </div>
  );
};

export default CenteredAlert;
