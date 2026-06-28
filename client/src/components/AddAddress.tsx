import React, { useEffect, useState, type FormEvent } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
type InputFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  address: { [key: string]: string };
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  handleChange,
  address,
}) => (
  <input
    className="w-full px-2 py-2.5 border border-primary4/40 rounded focus:outline focus:outline-2 focus:outline-primary4/80 transition"
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    required
  />
);
const AddAddress: React.FC = () => {
  const { axios, user, navigate } = useAppContext();
  const [address, setAddress] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message);
        setShowAddress(false);
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
    if (!user) {
      navigate("/cart");
    }
  }, []);
  const { setShowAddress } = useAppContext();
  return (
    <div>
      <div
        className="fixed inset-0 z-50 flex justify-end "
        onClick={() => setShowAddress(false)}
      >
        <div className="flex-1 bg-black/50 "></div>
        <div className=" relative w-[500px]  h-full  shadow-xl bg-bgw  ">
          <div className="absolute left-0 top-0 h-full w-6 -translate-x-full bg-[#f5ca99ff] blur-2xl opacity-100"></div>
          <div className="mt-16 pb-16">
            <div className="pl-7">
              <p className="text-2xl text-primary4/80 ">
                Add Shipping{" "}
                <span className="font-semibold text-sb">Address</span>
                <div>
                  <form
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={onSubmitHandler}
                    className="space-y-3 mt-6 text-sm mr-7"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                    <InputField
                      handleChange={handleChange}
                      address={address}
                      name="email"
                      type="email"
                      placeholder="Email Adress"
                    />
                    <InputField
                      handleChange={handleChange}
                      address={address}
                      name="street"
                      type="text"
                      placeholder="Street"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="city"
                        type="text"
                        placeholder="City"
                      />
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="state"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="pincode"
                        type="number"
                        placeholder="Pin code"
                      />
                      <InputField
                        handleChange={handleChange}
                        address={address}
                        name="country"
                        type="text"
                        placeholder="Country"
                      />
                    </div>
                    <InputField
                      handleChange={handleChange}
                      address={address}
                      name="phone"
                      type="text"
                      placeholder="Phone"
                    />
                    <button className="w-full mt-6 py-3 bg-sb text-bgw hover:bg-primary4 transition cursor-pointer rounded">
                      Save address
                    </button>
                  </form>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
