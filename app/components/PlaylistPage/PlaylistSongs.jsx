import DeleteSong from "./DeleteSong"
import PlayButton from "./PlayButton"

export default function PlaylistSongs() {
    return (
        <div className="bg-gray-700 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold">Playlist Name</h3>

        {/** Playlist Songs List */}
        <div>
            <div className="flex justify-between items-center space-x-8 p-4 text-white rounded-md">
                <h3>Playlist Song 1</h3> 
                <div className="flex items-center space-x-4">
                    {/** Play Button */}

                    <button className="bg-green-600 p-2 text-2xl rounded-md cursor-pointer">
                        <PlayButton />
                    </button>
                    {/** Delete Button */}
                    <button className="bg-red-600 p-2 text-2xl rounded-md cursor-pointer">
                        <DeleteSong />
                    </button>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
