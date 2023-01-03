import React from "react";
import "./Banner.css";
import { FaBeer } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      <div className="flex items-center relative">
        <div className="navbar rounded-md bg-white">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <a>
                  Check in
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 dropdown-bg">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>
                  Check Out
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 dropdown-bg">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>3 adults - 0 children - 2 rooms</a>
                <ul className="p-2 dropdown-bg">
                  <li>
                    <p>Maximum 4 guests per room</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span className="font-bold">Rooms</span>{" "}
                    </p>
                    <p className="ml-4 p-0">(Max. 3 guest capacity per room)</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span className="font-bold">Adults</span>{" "}
                    </p>
                    <p className="ml-4 p-0">(Max. 3 guest capacity per room)</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span className="font-bold">Children</span>
                    </p>
                    <p className="ml-4 p-0">(Max. 3 guest capacity per room)</p>
                  </li>
                  <button className="text-center btn btn-outline mt-2">
                    Done
                  </button>
                </ul>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div>
          <button className="bg-yellow-400 text-black absolute available">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
