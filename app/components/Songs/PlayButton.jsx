import { FaPlay } from "react-icons/fa";

export default function PlayButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-white border-2 border-white p-4 rounded-full">
      <FaPlay size={20} />
    </button>
  );
}
