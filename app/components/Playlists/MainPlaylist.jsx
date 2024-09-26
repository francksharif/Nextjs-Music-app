import Playlist from "./Playlist";
import { usePlaylist } from "@/app/context/PlaylistProvider";

export default function MainPlaylist() {
    const { playlists } = usePlaylist();

    return (
        <div className="w-full flex-row space-y-4">
            {playlists.map(playlist => (
                <Playlist key={playlist.id} id={playlist.id} title={playlist.name} />
            ))}
        </div>
    );
}
