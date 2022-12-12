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

  onSubmit(event) {
    const { createItem, toggleForm } = this.props;
    createItem(event, this.props.item);
    toggleForm();
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
    const { item } = this.props
    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
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
        </fieldset>
        <button type="submit" title="Add this Experience"><FontAwesomeIcon icon={faCircleCheck} /></button>
      </form>
    );
  }
}

export default EducationSectionForm;
