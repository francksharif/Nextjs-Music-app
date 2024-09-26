'use client';
import MainPlaylist from "@/app/components/Playlists/MainPlaylist";
import { usePlaylist } from "@/app/context/PlaylistProvider";
import { useAuth } from "@/app/context/AuthProvider";
import { useState } from "react";
import axios from "axios";


export default function Playlists() {

    const [newPlaylistName, setNewPlaylistName] = useState('');
    const { id: userId } = useAuth();
    const [error, setError] = useState('');
    const { updatePlaylist } = usePlaylist();

    // Add Playlist
    const definePlaylist = async (playlistName, userId) => {
        setError('');
        try {
            const response = await axios.post(`/api/playlists/${userId}`, {
                playlistName: playlistName,
            });
            updatePlaylist(response.data);
            setNewPlaylistName('');
        }catch (error){
            setError('Error: ', error.response?.data?.message);
        }
    }


    const addPlaylist = (e) => {
        e.preventDefault();
        if (newPlaylistName.trim()){
            definePlaylist(newPlaylistName, userId);
        } else {
            setError('Cannot add empty playlist.');
             }
        };
    


    return (

        <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-center text-3xl font-bold text-white mb-8">My PlayLists</h1>
        {error && <p className="text-red-500">{error}</p>}
        

        { /** Add a new Playlist */}
        <form className="mb-6 flex ml-6" onSubmit={addPlaylist}>
                <input
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    type="text"
                    placeholder="Playlist Name"
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <button
                type="submit"
                    className="ml-2 p-2 bg-green-600 text-white rounded"
                >
                    Add Playlist
                </button>
            </form>
       
        <div className="max-w-7xl mx-auto px-2 sm:px-6 justify-center lg:px-8 flex gap-6 p-4">

        

             {/* PlayLists List */}
            <MainPlaylist />
        </div>
      </div>
     
        
    );
}