import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { Button, Modal, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../Redux/ActionCreators";
import LoadingComponent from "../Loading/LoadingComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment, date) =>
      dispatch(addComment(dishId, author, rating, comment, date)),
    fetchDishes: () => dispatch(fetchDishes()),
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

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    return (
      <div className="container">
        {this.props.dishes.isLoading ? (
          <LoadingComponent />
        ) : (
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
              {this.props.dishes.dishes.map((dish) => (
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
                  addComment={this.props.addComment}
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
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
