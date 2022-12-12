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
    // this.editItem = this.editItem.bind(this);
  }

  toggleForm() {
    this.setState({
      formShowing: !this.state.formShowing,
    });
  }

  createItem(e, newItem) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(newItem),
    });
  }

  /* editItem() {
    // toggle form
    this.toggleForm();
    // set state to items values
    //then call onItemChange
  }
 */

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <button title="Add Experience / Hide Form" onClick={this.toggleForm}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        {/* The specific section component */}
        {React.createElement(this.props.children.type, {
          formShowing: this.state.formShowing,
          createItem: this.createItem,
          toggleForm: this.toggleForm,
          items: this.state.items,
        })}
      </div>
    );
  }
}

export default Section;
