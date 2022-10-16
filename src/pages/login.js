import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return <p className="text-3xl underline">Login page</p>;
}
