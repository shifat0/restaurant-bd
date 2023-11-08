import React, { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleSelectedDish = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          {dishes.map((dish) => (
            <MenuItem
              key={dish.id}
              dish={dish}
              handleSelectedDish={handleSelectedDish}
            />
          ))}
        </div>
        <div className="col-7">
          {selectedDish ? <DishDetail dish={selectedDish} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Menu;
