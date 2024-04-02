"use client";

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";
import { Login } from "./Login";

export const UserProfile = () => {
  const { user, logout } = useAuth();
  const { showModal } = useModal();

  return (
    <>
      {user ? (
        <button onClick={logout}>{user.username}</button>
      ) : (
        <button onClick={() => showModal(<Login />)}>Login</button>
      )}
    </>
  );
};
