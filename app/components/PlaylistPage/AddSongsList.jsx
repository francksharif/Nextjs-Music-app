'use client';
import { useState } from "react";
import songsData from '@/public/songs.json';

export default function AddSongsList({ onAddSong }) {
  const songs = songsData.songs;
    const [selectedSongId, setSelectedSongId] = useState("");

    const handleAddSong = () => {
        const songToAdd = songs.find(song => song.id === Number(selectedSongId));
        if (songToAdd) {
            onAddSong(songToAdd);
            setSelectedSongId("");
        }
      }

        return (
          <div className="bg-gray-700 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Add Songs to Playlist</h3>
              <div className="flex items-center space-x-4 mt-4">
                  <div>
                      <select
                          value={selectedSongId}
                          onChange={(e) => setSelectedSongId(e.target.value)}
                          className="bg-gray-800 py-3 px-2"
                      >
                          <option value="">Select a song to add</option>
                          {songs.map(song => (
                              <option key={song.id} value={song.id}>
                                  {song.title} - {song.artist}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div>
                      <button onClick={handleAddSong} className="bg-blue-600 p-2 text-2xl rounded-md cursor-pointer">
                          Add
                      </button>
                  </div>
              </div>
          </div>
      );
    
  }