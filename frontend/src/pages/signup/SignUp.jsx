import { BotMessageSquare } from "lucide-react";
import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleRadioChange = (e) => {
    setInputs({ ...inputs, gender: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="shadow-md px-4 py-6 rounded-lg w-[27rem] border bg-slate-200">
      <div className="flex items-center flex-col justify-center gap-2">
        <BotMessageSquare className="w-10 h-10" />
        <h1 className="text-3xl">Sign Up</h1>
        <p className="text-sm">Sign up to get you started</p>
      </div>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Fullname</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full input-md"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              className="radio"
              checked={inputs.gender === "male"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              className="radio"
              checked={inputs.gender === "female"}
              onChange={handleRadioChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <span>Sign up</span>
            )}
          </button>
          <a href="/signin" className="link link-info no-underline">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
