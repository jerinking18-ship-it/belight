import React from "react";

const NewLetter: React.FC = () => {
  return (
    <div className="m-6">
      <div className="flex flex-col items-center justify-center text-center space-y-2 bg-[url('/src/assets/images/bgw1.jpg')] bg-no-repeat pt-10 pb-10 w-286 ml-28 rounded">
        <h1 className="md:text-4xl text-2xl font-semibold text-sb">
          Never Miss a Deal!
        </h1>
        <p className="md:text-lg text-primary4/70 pb-8">
          Join us to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
          <input
            className="border border-primary4 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-amber-950/90"
            type="text"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-bgw bg-sb hover:bg-primary4 transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewLetter;
