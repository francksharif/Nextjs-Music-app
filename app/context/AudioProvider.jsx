'use client';
import React, { createContext, useContext, useEffect, useState } from "react";

// Create context 
const AudioContext = createContext();

export const AudioProvider=  ({ children }) => {

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(null);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(null);
    const audioRef = React.useRef(new Audio());


    // Effect to manage playing
    useEffect(() => {
        if (currentSong){
            audioRef.current.src = currentSong.audio;
            audio.current.play();
            setIsPlaying(true);
            audioRef.current.addEventListener('timeupdate', updateProgress);
            audioRef.current.addEventListener('ended', handleEnd);
        }


        return () => {
            audioRef.current.pause();
            audioRef.current.src = '';
            audioRef.current.removeEventListener('timeupdate', updateProgress);
            audioRef.current.removeEventListener('ended', handleEnd);
        };
    }, [currentSong]);



    // Update Progress Bar
    const updateProgress = () => {
        setProgress(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      };
    
    // Handle end of playing
      const handleEnd = () => {
        setIsPlaying(false);
        setProgress(0);
      };
    
    // Handle Play song
      const playSong = (song) => {
        setCurrentSong(song);
      };
    
    // Toggle Button
      const togglePlayPause = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

    
      return (
        <AudioContext.Provider value={{ currentSong, playSong, isPlaying, togglePlayPause, progress, duration}} >
            {children}
        </AudioContext.Provider>
      );
};


export const useAudio = () => useContext(AudioContext)