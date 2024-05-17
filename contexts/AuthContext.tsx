
import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import  { useRouter } from 'next/router'

import api from './api'
//import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {jwtDecode,  JwtPayload } from 'jwt-decode';



interface AuthContextType {
  user: JwtPayload | null;
  login: (requestBody: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

  console.log("I'm here")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      const token = localStorage.getItem('jwtToken');
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
        console.log(user)
        localStorage.setItem('jwtToken', user.accessToken);
        const decoded = jwtDecode<JwtPayload>(user.accessToken);
        setUser(decoded);
        router.push('/');
      } else {
        throw new Error('Invalid credentials');
      }
    };

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

