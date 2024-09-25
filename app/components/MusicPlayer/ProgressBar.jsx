'use client';
import { usePlayer } from "@/app/context/PlayerProvider";

export default function ProgressBar() {
    const { currentSong } = usePlayer();

    // Calculate Song Progress
    const calculateProgress = () => {
        if (currentSong.duration === 0) return 0;
        return (currentSong.elapsedTime / currentSong.duration) * 100;
    };
  
    return (
      <div className="w-full bg-gray-600 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${calculateProgress()}%` }} // Based on the song progress
        ></div>
      </div>
    );
}
