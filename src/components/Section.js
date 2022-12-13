import React, { Component } from "react";
import "../styles/section.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      formShowing: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItems = this.editItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleForm() {
    this.setState({
      formShowing: !this.state.formShowing,
    });
  }

  createItem(newItem) {
    this.setState({
      items: this.state.items.concat(newItem),
    });
  }

  editItems(editedItem) {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === editedItem.id) {
          item = editedItem;
        }
        return item;
      }),
    });
  }

  deleteItem(itemToDelete) {
    this.setState({
      items: this.state.items.filter((item) => item !== itemToDelete),
    });
  }

  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <button className="form-control-btn" title="Add Experience / Hide Form" onClick={this.toggleForm}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {/* The specific section component */}
        {React.createElement(this.props.children.type, {
          formShowing: this.state.formShowing,
          createItem: this.createItem,
          toggleForm: this.toggleForm,
          items: this.state.items,
          editItems: this.editItems,
          deleteItem: this.deleteItem,
        })}
        {this.state.items.length === 0 && (
          <p>Click the button above to add experience to this field.</p>
        )}
      </div>
    );
  }
}

export default Section;
