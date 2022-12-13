import { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

class ExperienceSectionForm extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (e) => {
    switch (e.target.id) {
      case "company":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            company: e.target.value,
            position: this.props.item.position,
            tasks: this.props.item.tasks,
            date: this.props.item.date,
          },
        });
        break;
      case "position":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            company: this.props.item.company,
            position: e.target.value,
            tasks: this.props.item.tasks,
            date: this.props.item.date,
          },
        });
        break;
      case "tasks":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            company: this.props.item.company,
            position: this.props.item.position,
            tasks: e.target.value,
            date: this.props.item.date,
          },
        });
        break;
      case "date":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            company: this.props.item.company,
            position: this.props.item.position,
            tasks: this.props.item.tasks,
            date: e.target.value,
          },
        });
        break;
      default:
    }
  };

  onSubmit() {
    this.props.createItem(this.props.item);
    this.props.toggleForm();
    this.props.onItemChange({
      item: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    });
  }

  onUpdate() {
    this.props.toggleForm();
    this.props.toggleisEditingItem();
    this.props.editItems(this.props.item);
    this.props.onItemChange({
      item: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    });
  }

  render() {
    const { item } = this.props;

    /* The submit button will either submit a new item or update item */
    const btnTitle = () => {
      if (this.props.isEditingItem === true) {
        return "Update Experience";
      }
      return "Add this Experience";
    };

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (this.props.isEditingItem === false) {
            this.onSubmit();
          } else {
            this.onUpdate();
          }
        }}
      >
        <fieldset className="practical-exp">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={item.company}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            value={item.position}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="tasks">Description of Tasks</label>
          <input
            type="text"
            id="tasks"
            value={item.tasks}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="date">Date Completed</label>
          <input
            type="date"
            id="date"
            value={item.date}
            onChange={this.handleInputChange}
            required
          />
        </fieldset>
        <button type="submit" title={btnTitle()}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
      </form>
    );
  }
}

export default ExperienceSectionForm;
