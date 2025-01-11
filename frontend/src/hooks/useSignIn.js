import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignIn = () => {
  const [loading, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const signin = async (username, password) => {
    const success = handleInputErrors(username, password);

    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signin };
};

export default useSignIn;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }

  return true;
}
