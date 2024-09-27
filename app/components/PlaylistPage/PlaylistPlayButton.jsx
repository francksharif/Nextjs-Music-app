import { FaPlay } from "react-icons/fa";

export default function PlaylistPlayButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-white border-2 border-white p-2 rounded-md">
      <FaPlay size={6} />
    </button>
  );
}