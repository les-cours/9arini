
import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import  { useRouter } from 'next/router'

//import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {jwtDecode,  JwtPayload } from 'jwt-decode';



interface AuthContextType {
  user: JwtPayload | null;
  login: (requestBody: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      }
    }, []);

    const router = useRouter()
    const login = async (requestBody: { username: string; password: string }) => {


            const response = await fetch('http://127.0.0.1:3004/teacher-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const {user} = await response.json();
                Cookies.set('token', user.accessToken)
                localStorage.setItem('token', user.accessToken);
                const decoded = jwtDecode<JwtPayload>(user.accessToken);
                setUser(decoded);
                router.push('/');
            } else {
                const errorData = await response.json();
                setError(errorData.error.message)
            }
    };

    const logout = (email, password) => {
        Cookies.remove('token')
        localStorage.removeItem('token')
        setUser(null)
        window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout,error }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

