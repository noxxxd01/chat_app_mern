import { BotMessageSquare } from "lucide-react";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signin } = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(username, password);
  };
  return (
    <div className="shadow-md px-4 py-6 rounded-lg w-[27rem] border bg-slate-200">
      <div className="flex items-center flex-col justify-center gap-2">
        <BotMessageSquare className="w-10 h-10" />
        <h1 className="text-3xl">Sign In</h1>
        <p className="text-sm">Sign in to get you started</p>
      </div>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="btn btn-primary" type="submit">
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>Sign in</>
            )}
          </button>
          <a href="/signup" className="link link-info no-underline">
            Dont have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
