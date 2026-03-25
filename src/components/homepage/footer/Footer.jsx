import React from "react";
import footerImg from "../../../assets/logo-footer.png";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  return (
    <div className="mt-60 space-y-10 bg-[#06091A]  relative pt-40">

      <div className="absolute left-1/2 -translate-x-1/2 -top-52 md:-top-32 w-full px-4">
        <Newsletter />
      </div>

      <div className="flex justify-center items-center pt-15">
        <img src={footerImg} alt="" />
      </div>

      <footer className="footer sm:footer-horizontal p-10">
        <nav>
          <h6 className="text-lg font-bold text-white">About Us</h6>
          <p className=" text-gray-400">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br />
            services to our customers.{" "}
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-white">Quick Links</h6>
          <ul className="space-y-2">
            <li>
              <a className=" text-gray-400 link-hover link">Home</a>
            </li>
            <li>
              <a className=" text-gray-400 link-hover link">Services</a>
            </li>
            <li>
              <a className=" text-gray-400 link-hover link">About</a>
            </li>
            <li>
              <a className=" text-gray-400 link-hover link">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="space-y-3">
          <h6 className="text-lg font-bold text-white">Subscribe</h6>
          <p className=" text-gray-400">
            Subscribe to our newsletter for the <br />
            latest updates.
          </p>
          <div className="flex  text-black  ">
            <input
              className="bg-white rounded-lg rounded-r-none p-2 pl-4"
              type="text"
              placeholder="Enter your gmail"
            />
            <button className=" bg-[#E7FE29] btn rounded-lg rounded-l-none ">
              Subscribe
            </button>
          </div>
        </nav>
      </footer>
      <div className="footer border-t sm:footer-horizontal footer-center bg-[#06091A]  p-4">
        <aside>
          <p className=" text-gray-400">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
