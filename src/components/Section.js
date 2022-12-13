import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

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

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button title="Add Experience / Hide Form" onClick={this.toggleForm}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        {/* The specific section component */}
        {React.createElement(this.props.children.type, {
          formShowing: this.state.formShowing,
          createItem: this.createItem,
          toggleForm: this.toggleForm,
          items: this.state.items,
          editItems: this.editItems,
        })}
      </div>
    );
  }
}

export default Section;
