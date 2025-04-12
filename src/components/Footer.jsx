import React from "react";
import { Link } from "react-router-dom";

import call from "../assets/footerContent/call.png";
import location from "../assets/footerContent/location.png";
import sms from "../assets/footerContent/sms.png";
import facebook from "../assets/footerContent/facebook.png";
import insta from "../assets/footerContent/instagram.png";
import youtube from "../assets/footerContent/youtube.png";
import whiteLogo from "../assets/whiteLogo.png";

const contactInfo = [
  {
    msg: "Småbrukets backe 12, 14158 Sweden",
    icon: location,
    id: 1,
  },
  {
    msg: "+46707774480",
    icon: call,
    id: 2,
  },
  {
    msg: "sardaralikhan99@outlook.com",
    icon: sms,
    id: 3,
  },
];

const footerSections = [
  {
    title: "Our Product",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about-us" },
      { label: "Contact Us", to: "/contact" },
      { label: "Services", to: "/services" },
      { label: "FAQS", to: "faqs" },
    ],
  },
  {
    title: "About Rentcars",
    links: [
      { label: "Why choose us", to: "#" },
      { label: "Our Story", to: "#" },
      { label: "Investor Relations", to: "#" },
      { label: "Terms & Conditions", to: "/termsAndConditions" },
      { label: "Privacy Policy", to: "/privacyPolicy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#051C34] text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div className="mt-8">
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <img src={item.icon} alt="icon" className="w-5 h-5 mt-1" />
                <p className="text-[#D6D6D6] text-sm">{item.msg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-semibold mb-4 md:ms-10">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, i) =>
                link.to === "#" ? (
                  <li key={i} className="md:ms-10">
                    <a
                      href="#"
                      className="text-[#D6D6D6] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={i} className="md:ms-10">
                    <Link
                      to={link.to}
                      className="text-[#D6D6D6] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            {[facebook, insta, youtube].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:opacity-75 transition-opacity"
              >
                <img src={icon} alt="social" className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#575757] pt-6 text-center text-sm text-[#D6D6D6]">
        © 2023 Rentcars, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
