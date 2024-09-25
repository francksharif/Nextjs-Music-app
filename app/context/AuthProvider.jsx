'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [id, setId] = useState(null);
    const router = useRouter();

    // Verify if User is authenticated with localStorage
    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedId = localStorage.getItem('id');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
            setId(storedId);
        }
    }, []);

    // Login Action
    const login = (userId) => {
        setIsAuthenticated(true);
        setId(userId);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('id', userId);
        router.push('/dashboard');
    }; 

    // Logout Action
    const logout = () => {
        setIsAuthenticated(false);
        setId(null);
        localStorage.removeItem('id');
        localStorage.removeItem('isAuthenticated');
        router.push('/login');
    };

    const isAuth = () => isAuthenticated;

    // return context 
    return (
        <AuthContext.Provider value={{ isAuth, login, logout, id }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
