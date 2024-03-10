"use client";
import { relative } from "path";
import React, { useState } from "react";

const SignIn = () => {
  const [active, setActive] = useState({ sign: false, join: false });

  const handleActiveState = (tab: "sign" | "join") => {
    setActive((prevState) => ({
      ...prevState,
      sign: tab === "sign",
      join: tab === "join",
    }));
  };
  return (
    <div>
      <ul className="nav fs-4 fw-semibold nav-underline">
        <li className="nav-item">
          <a
            style={{ color: "#8064A2" }}
            onClick={() => handleActiveState("sign")}
            className={`nav-link ${active["sign"] ? "active" : ""}`}
            aria-current="page"
            href="#"
          >
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleActiveState("join")}
            style={{ color: "#8064A2" }}
            className={`nav-link ${active["join"] ? "active" : ""}`}
            href="#"
          >
            Join In
          </a>
        </li>
      </ul>
      <button
        className="text-center  border-1 rounded my-3"
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          borderColor: "#8064A2",
          width: "410px",
          height: "40px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ left: "10px", top: "10px", position: "absolute" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z"
            fill="#FBBC05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z"
            fill="#EA4335"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z"
            fill="#34A853"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z"
            fill="#4285F4"
          />
        </svg>
        Continue With Google
      </button>
      <button
        className="text-center  border-1 rounded my-3"
        style={{
          position: "relative",
          borderColor: "#8064A2",
          width: "410px",
          backgroundColor: "#ffffff",
          height: "40px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ left: "10px", top: "10px", position: "absolute" }}
        >
          <g clip-path="url(#clip0_12918_408)">
            <path
              d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z"
              fill="#1877F2"
              stroke="white"
              strokeWidth="0.2"
            />
            <path
              d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z"
              fill="white"
              stroke="white"
              strokeWidth="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_12918_408">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Continue With Google
      </button>{" "}
      <div className="d-flex justify-content-around">
        <div style={{ width: "149px" }}>
          <hr />
        </div>
        <span className="p-1">John Doe</span>
        <div style={{ width: "149px" }}>
          <hr />
        </div>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control my-3 custom-input"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control my-3 custom-input"
          placeholder="Password"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        {active["sign"] && (
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input type="checkbox" className="border-2 me-2" />
            Remember me
          </div>
        )}
        {active["join"] && (
          <div className="d-flex">
            <div
              className="mx-1"
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#ffffff",
              }}
            ></div>
            <div
              className="mx-1"
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#ffffff",
              }}
            ></div>
            <div
              className="mx-1"
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#ffffff",
              }}
            ></div>
          </div>
        )}
        {active["sign"] && (
          <span>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              style={{ backgroundColor: "#ffffff" }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M9.81945 5.33334H9.1628V4.00001C9.1628 2.16001 7.69193 0.666672 5.8796 0.666672C4.06727 0.666672 2.59639 2.16001 2.59639 4.00001V5.33334H1.93975C1.21744 5.33334 0.626465 5.93334 0.626465 6.66667V13.3333C0.626465 14.0667 1.21744 14.6667 1.93975 14.6667H9.81945C10.5418 14.6667 11.1327 14.0667 11.1327 13.3333V6.66667C11.1327 5.93334 10.5418 5.33334 9.81945 5.33334ZM5.8796 11.3333C5.15729 11.3333 4.56631 10.7333 4.56631 10C4.56631 9.26667 5.15729 8.66667 5.8796 8.66667C6.6019 8.66667 7.19288 9.26667 7.19288 10C7.19288 10.7333 6.6019 11.3333 5.8796 11.3333ZM3.90967 5.33334V4.00001C3.90967 2.89334 4.78957 2.00001 5.8796 2.00001C6.96962 2.00001 7.84952 2.89334 7.84952 4.00001V5.33334H3.90967Z"
                fill="#939CA3"
              />
            </svg>
            Forgot Password
          </span>
        )}
        {active["join"] && <span>Password Strength</span>}
      </div>
      {active["join"] && <div
        style={{ fontSize: "13px", width: "100%" }}
        className="d-flex justify-content-center fw-light"
      >
        By continuing, you agree to our<strong> {" "} Terms of Service {" "}</strong>{" "} and{" "}
        <strong>Privacy Policy.</strong>
      </div>}
      <button
        className="text-center  border-1 rounded my-3"
        style={{
          position: "relative",
          borderColor: "#000000",
          backgroundColor: "#ffffff",
          width: "410px",
          height: "40px",
        }}
      >
        Continue
      </button>{" "}
    </div>
  );
};

export default SignIn;
