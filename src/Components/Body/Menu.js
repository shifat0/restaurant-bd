import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { Button, Modal, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };

  handleSelectedDish = (dish) => {
    this.setState({ selectedDish: dish });
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {this.props.dishes.map((dish) => (
              <MenuItem
                key={dish.id}
                dish={dish}
                handleSelectedDish={this.handleSelectedDish}
              />
            ))}
          </div>
          <Modal isOpen={this.state.modalOpen}>
            {this.state.selectedDish && (
              <DishDetail
                dish={this.state.selectedDish}
                comments={this.props.comments.filter(
                  (comment) => comment.dishId === this.state.selectedDish.id
                )}
              />
            )}
            <ModalFooter>
              <Button
                color="danger"
                onClick={() => this.setState({ modalOpen: false })}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Menu);
