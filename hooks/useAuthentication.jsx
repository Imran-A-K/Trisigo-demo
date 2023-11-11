"use client";
import { AuthContext } from "@/provider/AuthenticationProvider.jsx";
import { useContext } from "react";

const useAuthentication = () => {
  const authFunctions = useContext(AuthContext);
  return authFunctions;
};

export default useAuthentication;
