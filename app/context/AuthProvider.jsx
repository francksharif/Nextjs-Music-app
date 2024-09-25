'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    // Verify if User is authenticated with localStorage
    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Login Action
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
    }; // <-- Ajout de la parenthèse fermante ici

    // Logout Action
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        router.push('/login');
    };

    const isAuth = () => isAuthenticated;

    // return context 
    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
