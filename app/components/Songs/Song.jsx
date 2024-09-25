'use client';
import PlayButton from './PlayButton';
import { usePlayer } from '@/app/context/PlayerProvider';


export default function Song({ artist, title, duration }) {
  const { setCurrentSong } = usePlayer();

  const selectSong = () => {
    setCurrentSong({
      artist,
      title,
      duration,
      isPlaying: true
    });
  };

  return (
    <div className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg mb-2">
      {/* Artiste */}
      <div className="text-sm font-semibold">{artist}</div>

      {/* Titre */}
      <div className="text-sm font-semibold">{title}</div>

      {/* Durée */}
      <div className="text-sm text-gray-400">{duration}</div>

      {/* Bouton Play */}
      <PlayButton onClick={selectSong} />
    </div>
  );
}
