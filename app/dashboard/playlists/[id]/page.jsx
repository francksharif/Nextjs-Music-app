import PlaylistSongs from "@/app/components/PlaylistPage/PlaylistSongs";
import AddSongsList from "@/app/components/PlaylistPage/AddSongsList";

export default function PlaylistPage({ params }) {
    console.log(params)
    const playlists = [
        { id: '1', title: 'Chill Vibes', description: 'Relax and unwind with these smooth tunes.' },
    ];

    const { id } = params;
    const playlist = playlists.find(p => p.id === id); 

    if (!playlist) {
        return (
            <div>
                Playlist Not Found!
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-900 min-h-screen">

            <h1 className="text-center my-4 text-xl">Playlist Page</h1>
        {/** PlayList Content */}
        <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
           <PlaylistSongs />
           <AddSongsList />
        </div>
        </div>
    );
}
