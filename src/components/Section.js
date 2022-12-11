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

  render() {
    const { items } = this.state;
    const [ formComponent, itemComponent ] = this.props.children
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <button title="Add Experience / Hide Form" onClick={this.toggleForm}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        {this.state.formShowing === true && (
          React.createElement(formComponent.type, {
            createItem: this.createItem, 
            toggleForm: this.toggleForm
          })
        )}
        <ul>
          {items.map((item) => {
            return (
              React.createElement(itemComponent.type, {
                item: item,
                key: item.key
              })
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Section;
