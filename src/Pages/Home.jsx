import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

export default connect(mapStateToProps)(Home);
