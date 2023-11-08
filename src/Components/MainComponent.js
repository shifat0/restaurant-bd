import React from "react";
import HeaderComponent from "./Header/HeaderComponent";
import BodyComponent from "./Body/BodyComponent";
import FooterComponent from "./Footer/FooterComponent";

const MainComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default MainComponent;
