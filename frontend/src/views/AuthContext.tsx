import React, { createContext, useContext, useState } from "react";

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
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const url = import.meta.env.VITE_API_URL + "/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
