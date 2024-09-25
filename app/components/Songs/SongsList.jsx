import Song from "./Song";
import songsData from "@/public/songs.json"



export default function SongsList (){

 const songs = songsData.songs;

 // Convert seconds into minutes format
 const formatDuration = (duration) => {
    const minutes = Math.floor(duration/60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 }

  return (
    <div className="w-full">
      {songs.map((song, index) => (
        <Song
          key={song.id}
          artist={song.artist}
          title={song.title}
          duration={song.duration}
        />
      ))}
    </div>
  );
};
