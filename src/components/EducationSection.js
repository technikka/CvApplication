import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import EducationSectionForm from "./EducationSectionForm";
import EducationSectionItem from "./EducationSectionItem";

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

  // TEMPORARY
  // seed() {
  //   const item1 = {school: "Mark Twain", }
  // }

  createItem(e, newItem) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(newItem),
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Educational Experience</h1>
        <button title="Add Experience / Hide Form" onClick={this.toggleForm}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        {this.state.formShowing === true && (
          <EducationSectionForm createItem={this.createItem} toggleForm={this.toggleForm} />
        )}

        <ul>
          {items.map((item) => {
            return (
              /* need key specified here to clear unique key warning */
              <EducationSectionItem item={item} key={item.id} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationSection;
