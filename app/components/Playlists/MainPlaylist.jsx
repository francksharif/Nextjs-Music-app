import Playlist from "./Playlist";

export default function MainPlaylist( {id, title }) {

    return (
        <div className="w-full">
            <Playlist id={id} title={title} />
        </div>
    );
}

