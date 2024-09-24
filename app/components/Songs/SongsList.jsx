import Song from "./Song";




export default function SongsList ({ songs }){



  return (
    <div className="w-full">
      {songs.map((song, index) => (
        <Song
          key={index}
          title={song.title}
          duration={song.duration}
        />
      ))}
    </div>
  );
};
