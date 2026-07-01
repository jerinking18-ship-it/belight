import React from "react";
import { logoImage } from "../assets/assets";

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
    },
    {
      title: "Need Help?",
      links: [
        "Delivery Information",
        "Return & Refund Policy",
        "Payment Methods",
        "Track your Order",
        "Contact Us",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <div className="mt-16">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-sb/55 ">
          <div>
            <img className="h-12 w-34 rounded" src={logoImage} alt="" />
            <p className="max-w-[410px] mt-6 text-sb/75">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              unde quaerat eveniet cumque accusamus atque qui error quo enim
              fugiat?
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-sb md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1 text-sb/75">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:underline transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="py-4 text-center text-sm md:text-base text-sb/70">
          Copyright 2025 © <a href="https://prebuiltui.com">PrebuiltUI</a> All
          Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
