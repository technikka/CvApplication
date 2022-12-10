import { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

class EducationSectionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        id: uniqid(),
        school: "",
        subject: "",
        date: "",
      },
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "school":
        this.setState({
          item: {
            id: this.state.item.id,
            school: e.target.value,
            subject: this.state.item.subject,
            date: this.state.item.date,
          },
        });
        break;
      case "subject":
        this.setState({
          item: {
            id: this.state.item.id,
            school: this.state.item.school,
            subject: e.target.value,
            date: this.state.item.date,
          },
        });
        break;
      case "date":
        this.setState({
          item: {
            id: this.state.item.id,
            school: this.state.item.school,
            subject: this.state.item.subject,
            date: e.target.value,
          },
        });
        break;
      default:
    }
  };

  onSubmit(event) {
    const { createItem, toggleForm } = this.props;
    createItem(event, this.state.item);
    toggleForm();
    this.setState({
      item: {
        id: uniqid(),
        school: "",
        subject: "",
        date: "",
      },
    });
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <fieldset className="education-exp ">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={item.school}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="subject">Course of Study</label>
          <input
            type="text"
            id="subject"
            value={item.subject}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="date">Date Completed</label>
          <input
            type="date"
            id="date"
            value={item.date}
            onChange={this.handleChange}
            required
          />
        </fieldset>
        <button type="submit" title="Add this Experience"><FontAwesomeIcon icon={faCircleCheck} /></button>
      </form>
    );
  }
}

export default EducationSectionForm;
