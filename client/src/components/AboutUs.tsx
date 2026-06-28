import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className=" mt-25">
      {" "}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-primary rounded overflow-hidden shrink-0">
          <img
            className="max-w-md w-98 h-73  rounded-lg"
            src="src/assets/images/nn.jpg"
            alt=""
          />
        </div>
        <div className="text-sm text-sb/90 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-sb">
            About Arokiyam Natural Foods
          </h1>
          <div className="w-46 h-[3px] rounded-full bg-gradient-to-r from-primary4 to-primary"></div>
          <p className="mt-8">
            PrebuiltUI helps you build faster by transforming your design vision
            into fully functional, production-ready UI components.{" "}
          </p>
          <p className="mt-4">
            Whether you're launching a SaaS app, landing page, or dashboard, our
            collection of Tailwind CSS components is crafted to boost your
            development speed and improve user experience.
          </p>
          <p className="mt-4">
            From UI design systems to automation-ready layouts, PrebuiltUI
            empowers you to build beautifully and scale effortlessly.
          </p>
          <a
            href="#"
            className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-primary4 to-primary1 py-3 px-8 rounded-full text-white"
          >
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
