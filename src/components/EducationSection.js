import { Component } from "react";
import EducationSectionForm from "./EducationSectionForm";

class EducationSection extends Component {
  constructor() {
    super();

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
    return (
      <div>
        <h1>Educational Experience</h1>
        <button onClick={this.toggleForm}>Hide/Show Form</button>
        {this.state.formShowing === true && (
          <EducationSectionForm createItem={this.createItem} />
        )}
      </div>

      /* display all items */
    );
  }
}

export default EducationSection;
