import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment, date) =>
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          dishId: dishId,
          author: author,
          rating: rating,
          comment: comment,
          date: date,
        },
      }),
  };
};

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
      date: new Date().toDateString(),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment,
      this.state.date
    );
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="author"
          value={this.state.author}
          placeholder="Your name"
          required
          onChange={this.handleInputChange}
        />
        <br />
        <Input
          onChange={this.handleInputChange}
          type="select"
          id="rating"
          value={this.state.rating}
        >
          <option>Please rate our food</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <br />
        <Input
          type="textarea"
          id="comment"
          value={this.state.comment}
          placeholder="Comment your thoughts ..."
          required
          onChange={this.handleInputChange}
        />
        <br />
        <Button type="submit">Comment</Button>
      </Form>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);
