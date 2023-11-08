import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = ({ dish, handleSelectedDish }) => {
  return (
    <>
      <Card
        inverse
        style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        onClick={() => handleSelectedDish(dish)}
      >
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.7,
          }}
          width="100%"
        />
        <CardImgOverlay style={{ color: "black" }}>
          <CardTitle tag="h3" style={{ fontWeight: "bolder" }}>
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </>
  );
};

export default MenuItem;
