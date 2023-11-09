import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetail = ({ dish, comments }) => {
  return (
    <>
      <Card className="my-2">
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: "100%",
          }}
          top
          width="100%"
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h3">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Badge color="dark">Price: {dish.price} TK</Badge>
            <Badge color="dark">Category: {dish.category}</Badge>
            {dish.label ? <Badge color="dark">{dish.label}</Badge> : null}
          </div>
          <hr />
          <LoadComments comments={comments} />
        </CardBody>
      </Card>
    </>
  );
};

export default DishDetail;
