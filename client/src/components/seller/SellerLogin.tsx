import React, { useEffect, type FormEvent } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const SellerLogin: React.FC = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });
      if (data.success) {
        setIsSeller(true);
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);
  return (
    !isSeller && (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm bg-bgw">
        <div className="bg-white  max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-primary/30">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary4">
            <span className="text-sb">Seller</span> Login
          </h2>
          <form onSubmit={onSubmitHandler}>
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
            <button
              type="submit"
              className="w-full mb-3 bg-sb py-2.5 rounded text-bgw"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default SellerLogin;
