'use client';
import PlayerButton from './PlayerButtons';
import ProgressBar from './ProgressBar';
import { usePlayer } from '@/app/context/PlayerProvider';

export default function Player() {
  const { currentSong, togglePlayPause } = usePlayer();

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col items-center space-y-4">
      {/* Song Title and Artist Name */}
      <div className="text-lg font-semibold mb-2 text-center">
        {currentSong.title} - {currentSong.artist}
      </div>

      <div className="w-full sm:w-auto flex flex-col items-center space-y-4">
        {/* Control Buttons */}
        <div className="flex justify-center items-center space-x-10">
          <PlayerButton iconType="previous" />
          <PlayerButton
            iconType={currentSong.isPlaying ? 'pause' : 'play'}
            onClick={togglePlayPause}
          />
          <PlayerButton iconType="next"/>
        </div>

        {/* ProgressBar */}
        <div className="w-full sm:w-96">
          <ProgressBar />
        </div>

        {/** Time Duration */}
        <div className="flex justify-between w-full sm:w-96 text-sm">
          <span>{formatTime(currentSong.elapsedTime)}</span>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
      </div>
    </div>
  );
}

// Format Time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
