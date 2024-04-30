import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigator = useNavigate();
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        numquam!
      </p>
      <button className={"btn"} onClick={() => navigator("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default Contact;
