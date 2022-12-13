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
      isEditingItem: false,
    };

    this.onItemChange = this.onItemChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.toggleisEditingItem = this.toggleisEditingItem.bind(this);
  }

  toggleisEditingItem() {
    this.setState({ isEditingItem: !this.state.isEditingItem });
  }

  editItem(itemToEdit) {
    this.onItemChange({
      item: {
        id: itemToEdit.id,
        school: itemToEdit.school,
        subject: itemToEdit.subject,
        date: itemToEdit.date,
      },
    });
    this.toggleisEditingItem();
    this.props.toggleForm();
  }

  onItemChange(newState) {
    this.setState(newState);
  }

  displayItems() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return (
            <EducationSectionItem
              item={item}
              key={item.id}
              editItem={this.editItem}
              deleteItem={this.props.deleteItem}
            />
          );
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
            isEditingItem={this.state.isEditingItem}
            editItem={this.editItem}
            toggleisEditingItem={this.toggleisEditingItem}
            editItems={this.props.editItems}
          />
        )}
        {this.props.items.length > 0 && this.displayItems()}
      </div>
    );
  }
}

export default EducationSection;
