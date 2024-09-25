'use client';
import { useAuth } from "../context/AuthProvider";

export default function LogoutButton(){
    
const { logout } = useAuth();

return (
    <button onClick={logout}
    className="block text-gray-300 bg-red-700  hover:text-white px-3 py-2 rounded-md text-base font-medium">Logout</button>
);
    
}