'use client';
import { useState, useEffect } from "react";
import PlaylistSongs from "@/app/components/PlaylistPage/PlaylistSongs";
import AddSongsList from "@/app/components/PlaylistPage/AddSongsList";
import songsData from '@/public/songs.json'

export default function PlaylistPage({ params }) {

    const { id, title } = params;

    const [playlistSongs, setPlaylistSongs] = useState([]); 

    const addSong = (song) => {
        setPlaylistSongs((prevSongs) => [...prevSongs, song]);
    };

    const removeSong = (songId) => {
        setPlaylistSongs((prevSongs) => prevSongs.filter(song => song.id !== songId));
    };

    return (
        <div className="p-6 bg-gray-900 min-h-screen">
            <h1 className="text-center my-4 text-xl">{title}</h1>
            <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
                <PlaylistSongs songs={playlistSongs} removeSong={removeSong} />
                <AddSongsList onAddSong={addSong} />
            </div>
        </div>
    );
}
