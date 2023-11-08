import { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: DISHES,
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
            {this.state.selectedDish ? (
              <DishDetail dish={this.state.selectedDish} />
            ) : (
              ""
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
