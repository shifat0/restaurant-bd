import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoadingComponent = () => {
  return (
    <div style={{ marginTop: "30vh" }}>
      <FontAwesomeIcon icon={faCircleNotch} spin style={{ fontSize: "50px" }} />
    </div>
  );
};

export default LoadingComponent;
