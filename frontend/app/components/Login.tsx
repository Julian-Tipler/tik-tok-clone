"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";

export const Login = () => {
  // const [loginPage, setLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const { hideModal } = useModal();

  if (user) {
    hideModal();
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Email
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="******************"
        />
        <p className="text-xs italic text-red-500">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={() => login(email, password)}
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};
