import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode, JwtPayload} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
        setLoading(false);
    }, []);

    const login = async (requestBody: { username: string; password: string;osname:string }) => {

        const response = await fetch('http://127.0.0.1:3004/teacher-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const {user} = await response.json();
            localStorage.setItem('token', user.accessToken);
            const decoded = jwtDecode<JwtPayload>(user.accessToken);
            setUser(decoded);
            setError(null); // Clear any previous errors
            window.location.pathname ="/"
        } else {
            const errorData = await response.json();
            setError(errorData.error.message)
        }

    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading,error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
