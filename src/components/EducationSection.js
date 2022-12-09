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
  }

  toggleForm() {
    this.setState({
      formShowing: !this.state.formShowing
    });
  }

  render() {
    return (
      <div>
        <h1>Educational Experience</h1>
        <button onClick={this.toggleForm}>+/-</button>
        { this.state.formShowing === true &&
          <EducationSectionForm />
        }
      </div>

      /* display all items */
    );
  }
}

export default EducationSection;
