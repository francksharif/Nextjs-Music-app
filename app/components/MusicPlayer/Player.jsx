'use client';
import PlayerButton from './PlayerButtons';
import ProgressBar from './ProgressBar';
import { usePlayer } from '@/app/context/PlayerProvider';




export default function Player() {
  const { currentSong, togglePlayPause } = usePlayer();

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col items-center space-y-4">
      {/* Titre de la chanson */}
      <div className="text-lg font-semibold mb-2 text-center">
        {currentSong.title} - {currentSong.artist}
      </div>

      <div className="w-full sm:w-auto flex flex-col items-center space-y-4">
        {/* Contrôles */}
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
      </div>
    </div>
  );
}
