import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import { loginUser } from "../../api/userApi";

const Login = () => {
  const { role, setUser } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  if (!username || !password) return alert("Enter username & password");

  try {
    const res = await loginUser(username, password);

    if (res.mustReset) {
      navigate(`/reset-password/${res.userId}`);
    } else {
      setUser({ username: res.username, roleId: res.roleId });
      navigate("/dashboard");
    }
  } catch (err) {
    alert(err.error || "Login failed");
  }
};

  if (!role) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
        <p className="text-xl font-semibold text-white drop-shadow-lg animate-pulse">
          Please select a role first!
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-96 flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold text-center text-white drop-shadow tracking-wide">
          Login as {role.toUpperCase()}
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 p-3 rounded-xl border bg-white/20 text-white">
            <User className="w-5 h-5 text-white/70" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none flex-1 placeholder-white/60 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl border bg-white/20 text-white">
            <Lock className="w-5 h-5 text-white/70" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none flex-1 placeholder-white/60 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



