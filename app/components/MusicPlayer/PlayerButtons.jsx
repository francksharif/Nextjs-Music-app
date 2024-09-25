import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export default function PlayerButton ({ iconType, onClick}){

    const getIcon = () => {
        switch (iconType) {
          case 'play':
            return <FaPlay size={20} />;
          case 'pause':
            return <FaPause size={20} />;
          case 'next':
            return <FaForward size={20} />;
          case 'previous':
            return <FaBackward size={20} />;
          default:
            return null;
        }
      };
    
      return (
        <button onClick={onClick} className="text-white border-2 border-white p-4 rounded-full">
          {getIcon()}
        </button>
      );

};
  
