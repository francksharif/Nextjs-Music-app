'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider'; 
import axios from 'axios';

// Create the context
const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
    const { id: userId } = useAuth(); 
    const [playlists, setPlaylists] = useState([]);

    // Load Playlists from User
    useEffect(() => {
        const loadPlaylists = async () => {
            if (userId) {
                try {
                    const response = await axios.get(`/api/playlists/${userId}`);
                    const data = response.data; 
                    if (Array.isArray(data)) {
                        setPlaylists(data);
                    } else {
                        setPlaylists([]);
                    }
                } catch (error) {
                    console.error("Erreur lors du chargement des playlists : ", error);
                }
            }
        };

        loadPlaylists(); 
    }, [userId]);


    const updatePlaylist = (newPlaylist) => {
        setPlaylists(prevPlaylists => [...prevPlaylists, newPlaylist]);
    };


    const removePlaylist = (playlistId) => {
        setPlaylists(prevPlaylists => prevPlaylists.filter(playlist => playlist.id !== playlistId));
    };

    return (
        <PlaylistContext.Provider value={{ playlists, updatePlaylist, removePlaylist }}>
            {children}
        </PlaylistContext.Provider>
    );
}

export const usePlaylist = () => useContext(PlaylistContext);
