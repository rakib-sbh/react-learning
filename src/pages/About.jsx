import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const About = (props) => {
  console.log(props);

  let param = useParams();
  let location = useLocation();

  console.log("param", param);
  console.log("location", location);

  const navigator = useNavigate();
  return (
    <div>
      <h1>Inside About Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        expedita cupiditate quia, excepturi porro obcaecati vero sapiente
        tempora voluptatum incidunt.
      </p>
      <button className="btn" onClick={() => navigator("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default About;
