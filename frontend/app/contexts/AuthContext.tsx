"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export type User = {
  username: string;
  email: string;
  id: string;
  text: string;
  profile_picture_url: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  loadingAuth: boolean;
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setLoadingAuth(false);
      return;
    }

    const fetchUser = async () => {
      setLoadingAuth(true);
      try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/me";
        const user = await fetchWithAuth(url);
        setUser(user);
      } catch (error) {
        console.error(error);
        setUser(null);
        localStorage.removeItem("authToken");
      } finally {
        setLoadingAuth(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const { token, error } = await response.json();
    if (error) {
      console.error(error);
      return;
    }
    localStorage.setItem("authToken", token);
    window.location.reload();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
