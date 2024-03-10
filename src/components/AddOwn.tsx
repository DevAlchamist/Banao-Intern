import React from "react";

const AddOwn = () => {
  return (
    <div
      style={{ backgroundColor: "#F7FDFF", height: "484px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ backgroundColor: "#ffffff", height: "284px", width: "1240px" }}
        className=" p-5 border rounded"
      >
        <div className="fw-semibold fs-4 mb-4">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-3"
          >
            <path
              d="M17.0002 0.333313C7.80016 0.333313 0.333496 7.79998 0.333496 17C0.333496 26.2 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.2 33.6668 17C33.6668 7.79998 26.2002 0.333313 17.0002 0.333313ZM23.6668 18.6666H18.6668V23.6666C18.6668 24.5833 17.9168 25.3333 17.0002 25.3333C16.0835 25.3333 15.3335 24.5833 15.3335 23.6666V18.6666H10.3335C9.41683 18.6666 8.66683 17.9166 8.66683 17C8.66683 16.0833 9.41683 15.3333 10.3335 15.3333H15.3335V10.3333C15.3335 9.41665 16.0835 8.66665 17.0002 8.66665C17.9168 8.66665 18.6668 9.41665 18.6668 10.3333V15.3333H23.6668C24.5835 15.3333 25.3335 16.0833 25.3335 17C25.3335 17.9166 24.5835 18.6666 23.6668 18.6666Z"
              fill="#0096C8"
            />
          </svg>
          Add Your Own
        </div>
        <div className="fs-5 fw-light">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <button style={{color:"#8064A2",borderColor:"#8064A2",backgroundColor:"#ffffff"}} className="rounded-2 border-1 px-4 my-4 py-2">Add New</button>
      </div>
    </div>
  );
};

export default AddOwn;
