"use client";
import NavImg from "@/assets/HobbyCue Logo v2 1.png";
import Image from "next/image";
import { useState } from "react";

type ModalState = {
 explore: boolean;
 hobbies: boolean;
};

const Nav = () => {
  const [openModal, setOpenModal] = useState({explore:false,hobbies:false});
  const toggleModal = (modal: keyof ModalState) => {
    setOpenModal(prevState => ({
      ...prevState,
      [modal]: !prevState[modal],
      // Ensure the other modal is closed
      explore: modal === 'explore' ? !prevState.explore : false,
      hobbies: modal === 'hobbies' ? !prevState.hobbies : false,
    }));
 };
  return (
    <div
      className="d-flex border border-bottom-2 justify-content-center align-items-center"
      style={{ width: "100%", height: "60px" }}
    >
      <div className="px-3">
        <Image src={NavImg} alt="NavImage" />
      </div>
      <div className="px-4">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control border  rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span
            className="input-group-text border-left-0"
            style={{ backgroundColor: "#8064A2" }}
            id="search-addon"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.414 20.586L18.337 15.509C19.386 13.928 20 12.035 20 10C20 4.486 15.514 0 10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C12.035 20 13.928 19.386 15.509 18.337L20.586 23.414C21.366 24.195 22.634 24.195 23.414 23.414C24.195 22.633 24.195 21.367 23.414 20.586ZM3 10C3 6.14 6.14 3 10 3C13.86 3 17 6.14 17 10C17 13.86 13.86 17 10 17C6.14 17 3 13.86 3 10Z"
                fill="#303972"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="px-5 d-flex align-items-center">
        <div className="px-3 d-flex dropdown">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
          >
            <path
              d="M10 0.0390625C4.49875 0.0390625 0.0390625 4.49875 0.0390625 10C0.0390625 15.5013 4.49875 19.9609 10 19.9609C15.5013 19.9609 19.9609 15.5013 19.9609 10C19.9609 4.49875 15.5013 0.0390625 10 0.0390625ZM14.7405 5.83656L12.0142 11.7991C11.9706 11.8942 11.8942 11.9706 11.7991 12.0142L5.83656 14.7405C5.46953 14.9083 5.09172 14.53 5.25906 14.163L7.98531 8.20047C8.02891 8.10531 8.10531 8.02891 8.20047 7.98531L14.163 5.25906C14.53 5.09172 14.9083 5.47 14.7405 5.83656Z"
              fill="#8064A2"
            />
          </svg>
          Explore
          <div>
            <svg
              onClick={()=>toggleModal("explore")}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-2"
            >
              <path
                d="M5.99991 5.07101L2.17891 1.25001C1.76491 0.836014 1.09291 0.836014 0.678908 1.25001C0.264908 1.66401 0.264908 2.33601 0.678908 2.75001L5.29291 7.36401C5.68391 7.75501 6.31691 7.75501 6.70691 7.36401L11.3209 2.75001C11.7349 2.33601 11.7349 1.66401 11.3209 1.25001C10.9069 0.836014 10.2349 0.836014 9.82091 1.25001L5.99991 5.07101Z"
                fill="#939CA3"
              />
            </svg>
            {openModal["explore"] && (
              <div style={{ position: "absolute", top: "50px" }}>
                <ul style={{ listStyle: "none" }} className="border p-3">
                  <li>
                    <a className="dropdown-item" href="#">
                      People - Community
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Places - Venues
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Programs - Events
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Products - Store
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="px-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
          >
            <path
              d="M12 2.5L20.2272 7.25V16.75L12 21.5L3.77276 16.75V7.25L12 2.5Z"
              fill="#8064A2"
            />
            <path
              d="M11.6206 7.13723C11.7422 6.77269 12.2578 6.77269 12.3794 7.13723L13.2814 9.84062C13.3355 10.0028 13.4867 10.1127 13.6577 10.114L16.5075 10.1365C16.8918 10.1395 17.0511 10.6299 16.742 10.8582L14.4497 12.5514C14.3122 12.653 14.2544 12.8308 14.3059 12.9938L15.1652 15.711C15.2811 16.0774 14.864 16.3805 14.5513 16.1571L12.2326 14.5002C12.0935 14.4008 11.9065 14.4008 11.7674 14.5002L9.44871 16.1571C9.13604 16.3805 8.71889 16.0774 8.83476 15.711L9.69405 12.9938C9.7456 12.8308 9.68785 12.653 9.55032 12.5514L7.25798 10.8582C6.94887 10.6299 7.1082 10.1395 7.49248 10.1365L10.3423 10.114C10.5133 10.1127 10.6645 10.0028 10.7186 9.84062L11.6206 7.13723Z"
              fill="white"
            />
          </svg>
          Hobbies
          <svg
            width="12"
            onClick={()=>toggleModal("hobbies")}
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ms-2"
          >
            <path
              d="M5.99991 5.07101L2.17891 1.25001C1.76491 0.836014 1.09291 0.836014 0.678908 1.25001C0.264908 1.66401 0.264908 2.33601 0.678908 2.75001L5.29291 7.36401C5.68391 7.75501 6.31691 7.75501 6.70691 7.36401L11.3209 2.75001C11.7349 2.33601 11.7349 1.66401 11.3209 1.25001C10.9069 0.836014 10.2349 0.836014 9.82091 1.25001L5.99991 5.07101Z"
              fill="#939CA3"
            />
          </svg>
          {openModal["hobbies"] && (
              <div style={{ position: "absolute", top: "70px" }}>
                <ul style={{ listStyle: "none" }} className="border p-3">
                  <li>
                    <a className="dropdown-item" href="#">
                      People - Community
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Places - Venues
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Programs - Events
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Products - Store
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            )}
        </div>
        <div className="px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_12918_172)">
              <path
                d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z"
                fill="#8064A2"
              />
            </g>
            <defs>
              <clipPath id="clip0_12918_172">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_12918_175)">
              <path
                d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z"
                fill="#8064A2"
              />
            </g>
            <defs>
              <clipPath id="clip0_12918_175">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9201 7.24996V7.37996L20.4601 12.78C20.2875 13.4209 19.9073 13.9865 19.3789 14.3882C18.8505 14.7899 18.2038 15.0051 17.5401 15H9.89007C9.13906 15.003 8.41423 14.7243 7.85877 14.2188C7.30332 13.7133 6.95765 13.0179 6.89007 12.27L6.24007 4.90996C6.21754 4.66064 6.10232 4.42884 5.91717 4.26035C5.73202 4.09186 5.4904 3.99895 5.24007 3.99996H3.07007C2.80485 3.99996 2.5505 3.89461 2.36296 3.70707C2.17543 3.51953 2.07007 3.26518 2.07007 2.99996C2.07007 2.73475 2.17543 2.48039 2.36296 2.29286C2.5505 2.10532 2.80485 1.99996 3.07007 1.99996H5.24007C5.99107 1.99692 6.71591 2.27566 7.27136 2.78112C7.82682 3.28659 8.17248 3.982 8.24007 4.72996V4.99996H19.9301C20.2151 4.99773 20.4974 5.05646 20.7579 5.17222C21.0184 5.28798 21.2512 5.4581 21.4406 5.67117C21.63 5.88424 21.7716 6.13534 21.8561 6.40764C21.9405 6.67993 21.9657 6.96712 21.9301 7.24996H21.9201Z"
              fill="#8064A2"
            />
            <path
              d="M9.07007 22.0001C10.4508 22.0001 11.5701 20.8808 11.5701 19.5001C11.5701 18.1193 10.4508 17.0001 9.07007 17.0001C7.68936 17.0001 6.57007 18.1193 6.57007 19.5001C6.57007 20.8808 7.68936 22.0001 9.07007 22.0001Z"
              fill="#8064A2"
            />
            <path
              d="M17.0701 22.0001C18.4508 22.0001 19.5701 20.8808 19.5701 19.5001C19.5701 18.1193 18.4508 17.0001 17.0701 17.0001C15.6894 17.0001 14.5701 18.1193 14.5701 19.5001C14.5701 20.8808 15.6894 22.0001 17.0701 22.0001Z"
              fill="#8064A2"
            />
          </svg>
        </div>
        <div className="px-2">
          <button
            style={{
              width: "112px",
              height: "40px",
              backgroundColor: "#ffffff",
              borderColor: "#8064A2",
              color: "#8064A2",
              borderRadius: "10px",
            }}
            className="border-1"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
