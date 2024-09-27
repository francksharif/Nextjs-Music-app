import PlaylistPlayButton from "./PlaylistPlayButton";
import { usePlayer } from "@/app/context/PlayerProvider";

export default function PlaylistSongs({ songs, removeSong }) {

    const { playSong } = usePlayer();


    const handlePlay = (song) => {
        playSong(song); 
    };
    
    return (
        <div className="bg-gray-700 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Songs in Playlist</h3>
            {songs.length === 0 ? (
                <p className="text-white">No songs in the playlist.</p>
            ) : (
                songs.map(song => (
                    <div key={song.id} className="flex justify-between items-center space-x-8 p-4 text-white rounded-md">
                        <h3>{song.title} - {song.artist}</h3>
                        <div className="flex items-center space-x-4">
                            <button className="bg-green-600 p-2 rounded-md cursor-pointer" onClick={() => handlePlay(song)}>
                                <PlaylistPlayButton />
                            </button>
                            <button 
                                className="bg-red-600 p-2 text-xl rounded-md cursor-pointer" 
                                onClick={() => removeSong(song.id)}
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
