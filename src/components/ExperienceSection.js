import { Component } from "react";
import uniqid from "uniqid";
import ExperienceSectionForm from "./ExperienceSectionForm";
import ExperienceSectionItem from "./ExperienceSectionItem";

class ExperienceSection extends Component {
  constructor() {
    super();

    this.state = {
      item: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    }

    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange(newState) {
    this.setState(newState);
  }

  displayItems() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return <ExperienceSectionItem item={item} key={item.id} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.formShowing === true && (
          <ExperienceSectionForm
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

export default ExperienceSection;
