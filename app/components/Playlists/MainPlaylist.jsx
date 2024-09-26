import Playlist from "./Playlist";
import { useAuth } from "@/app/context/AuthProvider";
import { usePlaylist } from "@/app/context/PlaylistProvider";

export default function MainPlaylist( {id, title }) {
    const { playlists } = usePlaylist();


    return (
        <div className="w-full">
            {playlists.map(playlist => {
                <Playlist id={playlist.id} title={playlist.name} />
            })}
            
        </div>
    );
}

