import { Component } from "react";
import uniqid from "uniqid";
import EducationSectionForm from "./EducationSectionForm";
import EducationSectionItem from "./EducationSectionItem";

class EducationSection extends Component {
  constructor() {
    super();

    this.state = {
      item: {
        id: uniqid(),
        school: "",
        subject: "",
        date: "",
      },
    };

    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange(newState) {
    this.setState(newState);
  }

  displayItems() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return <EducationSectionItem item={item} key={item.id} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.formShowing === true && (
          <EducationSectionForm
            onItemChange={this.onItemChange}
            item={this.state.item}
            createItem={this.props.createItem}
            toggleForm={this.props.toggleForm}
          />
        )}
        {this.props.items.length > 0 && this.displayItems()}
      </div>
    );
  }
}

export default EducationSection;
