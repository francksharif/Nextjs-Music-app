'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/AuthProvider";



export default function page() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        // Get the credentials
        const credentials = {
            username,
            password,
        };

        // Verify credentials
        try {
            const response = await axios.post('api/auth/login', credentials);
            if (response.data.success){
                login();
                localStorage.setItem('currentUser', JSON.stringify(credentials));
                router.push('/dashboard');
            } else{
                setError('Invalid credentials');
            }
        } catch (error){
            setError('Connexion Error, Try again');
        }
    };


  /** */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>

        {/* Formulaire de login */}
        <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Username:</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Password:</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* Message d'erreur */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Bouton Login */}
        <button
          className="w-full bg-blue-600 p-2 rounded text-white"
          type="submit"
        >
          Login
        </button>
        </form>
      </div>
    </div>
  )
}

