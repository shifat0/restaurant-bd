import React from "react";
import { Badge } from "reactstrap";

const LoadComments = ({ comments }) => {
  return (
    <>
      <h5 style={{ fontWeight: "bolder" }}>Comments ({comments.length})</h5>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: "10px" }}>
          <hr />
          <h6>{comment.author}</h6>
          <span>{comment.comment}</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <Badge color="primary">
              Commented on: {new Date(comment.date).toLocaleDateString()}
            </Badge>
            <Badge color="primary">Rating: {comment.rating}</Badge>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadComments;
