'use client';
import { createContext, useState, useContext } from 'react';

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}




export function PlayerProvider({ children }) {

  // Set current playing song  
  const [currentSong, setCurrentSong] = useState({
    artist: 'Artiste Inconnu',
    title: 'Titre Inconnu',
    duration: '0:00',
    isPlaying: false
  });

  // Toggle the Player Button
  const togglePlayPause = () => {
    setCurrentSong(prevState => ({
      ...prevState,
      isPlaying: !prevState.isPlaying
    }));
  };

  return (
    <PlayerContext.Provider value={{ currentSong, setCurrentSong, togglePlayPause }}>
      {children}
    </PlayerContext.Provider>
  );
}
