import Image from "next/image";
import React from "react";
import HomeImage from "@/assets/Group 27.png";
import SignIn from "./SignIn";

const HomeScreen = () => {
  return (
    <div
        style={{backgroundColor: "#F7F5F9" }}
    >
      <div
        className=" d-flex container justify-content-between align-items-center"
        style={{width:"1240px"}}
      >
        <div>
          <div
            className="d-flex flex-column justify-content-end"
            style={{ height: "578px", width: "707px" }}
          >
            <span className="fs-1 fw-bold fst-italic" style={{ color: "#000" }}>
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </span>
            <p className="mt-5" style={{ width: "706px", height: "120px" }}>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <Image src={HomeImage} alt="HomeImage" />
          </div>
        </div>
        <div>
          <div style={{ width: "410px", height: "432px" }}>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
