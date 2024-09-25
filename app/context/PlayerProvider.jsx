'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the Player
const PlayerContext = createContext();

// Provider Component
export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState({
        title: 'No',
        artist: 'Artist',
        duration: 0,
        elapsedTime: 0,
        isPlaying: false,
    });

    const playSong = ({ title, artist, duration }) => {
        setCurrentSong({
            title,
            artist,
            duration,
            elapsedTime: 0,
            isPlaying: true,
        });
        // Reset elapsed time for the new song
        resetProgress();
    };

    const togglePlayPause = () => {
        setCurrentSong((prevSong) => ({
            ...prevSong,
            isPlaying: !prevSong.isPlaying,
        }));
    };

    const resetProgress = () => {
        setCurrentSong((prevSong) => ({
            ...prevSong,
            elapsedTime: 0,
        }));
    };

    // Simulate song progress
    useEffect(() => {
        let interval;
        if (currentSong.isPlaying) {
            interval = setInterval(() => {
                setCurrentSong((prevSong) => ({
                    ...prevSong,
                    elapsedTime: Math.min(prevSong.elapsedTime + 1, prevSong.duration), // Prevent exceeding duration
                }));
            }, 1000);
        }

        return () => clearInterval(interval); // Clear the interval on unmount
    }, [currentSong.isPlaying, currentSong.duration]);

    return (
        <PlayerContext.Provider
            value={{ currentSong, playSong, togglePlayPause }}
        >
            {children}
        </PlayerContext.Provider>
    );
};

// Custom Hook to use Player Context
export const usePlayer = () => {
    return useContext(PlayerContext);
};
