import React, { type FormEvent } from "react";
import { useAppContext } from "../context/AppContext";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [state, setState] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setShowUserLoggedIn, setUser, axios, navigate } = useAppContext();
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const { data } = await axios.post(`/api/user/${state}`, {
        email,
        password,
        name,
      });
      if (data.success) {
        navigate("/");
        setUser(data.user);
        setShowUserLoggedIn(false);
      } else {
        toast.error(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("http://localhost:8000/auth/google", {
          token: tokenResponse.access_token,
        });
        console.log("User:", res.data);
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm bg-black/50"
      onClick={() => setShowUserLoggedIn(false)}
    >
      <div className="bg-bgw max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-primary/70">
        <h2 className="text-2xl font-semibold mb-6 text-center text-b">
          <span className="text-sb">User</span>{" "}
          {state === "login" ? "Login" : "Sign"}
        </h2>

        <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()}>
          {state === "register" && (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              className="w-full bg-transparent border my-3 border-primary4 focus:outline focus:outline-2 focus:outline-primary4 rounded py-2.5 px-4 text-primary4"
              type="text"
              placeholder="Enter your name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            className="w-full bg-transparent border my-3 border-primary4 focus:outline focus:outline-2 focus:outline-primary4 rounded py-2.5 px-4 text-primary4"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            className="w-full bg-transparent border mt-1 border-primary4 focus:outline focus:outline-2 focus:outline-primary4 rounded py-2.5 px-4 text-primary4"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div className="text-right py-4">
            <a className="text-primary4 underline" href="#">
              Forgot Password
            </a>
          </div>
          {state === "register" ? (
            <p className="text-sb">
              Already have account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary4 cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p className="text-sb">
              Create an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary4 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
          <button
            type="submit"
            className="w-full mb-3 bg-primary py-2.5 rounded text-sb"
          >
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>

        <button
          onClick={() => googleLogin()}
          type="button"
          className="w-full flex items-center gap-2 justify-center mt-5 bg-sb py-2.5 rounded text-white"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
