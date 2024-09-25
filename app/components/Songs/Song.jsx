'use client';
import PlayButton from './PlayButton';
import { usePlayer } from '@/app/context/PlayerProvider';

export default function Song({ artist, title, duration }) {
    const { playSong } = usePlayer();

    // Function to play the song
    const play = () => {
        playSong({ artist, title, duration }); 
    };

    return (
        <div className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg mb-2">
            {/* Artist */}
            <div className="text-sm font-semibold">{artist}</div>

            {/* Title */}
            <div className="text-sm font-semibold">{title}</div>

            {/* Duration */}
            <div className="text-sm text-gray-400">{formatDuration(duration)}</div> {/* Use formatDuration for formatting */}

            {/* Play Button */}
            <PlayButton onClick={play} />
        </div>
    );
}

// Function to format the duration
function formatDuration(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00'; // Prevent NaN
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
