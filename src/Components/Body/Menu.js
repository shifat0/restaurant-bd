import { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import DishDetail from "./DishDetail";
import { Button, Modal, ModalFooter } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
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
            {this.state.dishes.map((dish) => (
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
                comments={this.state.comments.filter(
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

export default Menu;
