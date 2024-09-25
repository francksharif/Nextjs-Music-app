'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

   

    // Handle signup 
    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword){
            setError('Passwords dot not match');
            return;
            }
            
            // Get user informations
            const newUser = {
                username,
                password,
            };

            // Send Infos to the API
            try{
                const response = await axios.post('api/auth/signup', newUser);
                if (response.data.success){
                    router.push('/login');
                } else{
                    setError(response.data.message);
                }
            } catch( error ){
                setError("Signup Failed, Try again");
            }
        };
    






    /**           */
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Signup</h1>

            {/* Signup Form */}
            <form onSubmit={handleSignup}>
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

            <div className="mb-4">
                <label className="block mb-2 text-sm">Confirm Password:</label>
                <input
                    type="password"
                    className="w-full p-2 rounded bg-gray-700"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>

            {/* Messages */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            {/* SingUp Button */}
            <button
                className="w-full bg-blue-600 p-2 rounded text-white"
                type="submit"
            >
                Signup
            </button>
            </form>
        </div>
    </div>
    )
}