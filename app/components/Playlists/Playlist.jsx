import Link from "next/link";
import { usePlaylist } from "@/app/context/PlaylistProvider";
import { useAuth } from "@/app/context/AuthProvider";
import axios from "axios";

export default function Playlist({id, title}) {

    const { removePlaylist } = usePlaylist();
    const { id: userId } = useAuth();

    const deletePlaylist = async (playlistId, userId) => {

        const response = await axios.delete(`/api/playlists/${userId}`, {
            data: { playlistId } 
        });
        removePlaylist(playlistId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deletePlaylist(id, userId);
    }

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-md shadow-md">
        {/* Playlist Link */}
        <Link href={`/dashboard/playlists/${id}`} className="text-lg font-semibold cursor-pointer">
         {title}
        </Link>
  
        {/* Delete Button */}
        <button 
        onClick={handleDelete}
        className="bg-red-600 p-2 text-2xl rounded-md cursor-pointer">
            Del
        </button>
      </div>
    );
}