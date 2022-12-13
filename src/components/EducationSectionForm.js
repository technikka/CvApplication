import { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

class EducationSectionForm extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (e) => {
    switch (e.target.id) {
      case "school":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            school: e.target.value,
            subject: this.props.item.subject,
            date: this.props.item.date,
          },
        });
        break;
      case "subject":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            school: this.props.item.school,
            subject: e.target.value,
            date: this.props.item.date,
          },
        });
        break;
      case "date":
        this.props.onItemChange({
          item: {
            id: this.props.item.id,
            school: this.props.item.school,
            subject: this.props.item.subject,
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
        school: "",
        subject: "",
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
        school: "",
        subject: "",
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
        <fieldset className="education-exp ">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={item.school}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="subject">Course of Study</label>
          <input
            type="text"
            id="subject"
            value={item.subject}
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
          <button className="checkmark-submit" type="submit" title={btnTitle()}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </button>
        </fieldset>
      </form>
    );
  }
}

export default EducationSectionForm;
