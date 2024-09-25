'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/app/context/AuthProvider';
import { useRouter } from 'next/navigation';


export default function ProtectedRoute({ children }){
    const { isAuth } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAuth()){
            router.push('/login');
        }
    }, [isAuth]);

    return children;
}