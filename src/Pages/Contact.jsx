import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "Phone.",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{ paddingLeft: "20px", textAlign: "left" }}
        >
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-7">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    id="phoneNum"
                    placeholder="Phone Number"
                    value={this.state.phoneNum}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    onChange={this.handleInputChange}
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check />
                    <Input
                      onChange={this.handleInputChange}
                      type="checkbox"
                      id="agree"
                      defaultChecked={this.state.agree}
                    />
                    <strong>May we contact you?</strong>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offser: 1 }}>
                  <Input
                    onChange={this.handleInputChange}
                    type="select"
                    id="contactType"
                    value={this.state.contactType}
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Message
                </Label>
                <Col md={10}>
                  <Input
                    onChange={this.handleInputChange}
                    type="textarea"
                    id="message"
                    placeholder="Write your thoughts ...."
                    value={this.state.message}
                    rows="12"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send us feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
