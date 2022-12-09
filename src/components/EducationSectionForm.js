import { Component } from "react";

class EducationSectionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
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
            school: e.target.value,
            subject: this.state.item.subject,
            date: this.state.item.date,
          },
        });
        break;
      case "subject":
        this.setState({
          item: {
            school: this.state.item.school,
            subject: e.target.value,
            date: this.state.item.date,
          },
        });
        break;
      case "date":
        this.setState({
          item: {
            school: this.state.item.school,
            subject: this.state.item.subject,
            date: e.target.value,
          },
        });
        break;
      default:
    }
  };

  render() {
    const { createItem } = this.props;

    return (
      <form onSubmit={(event) => createItem(event, this.state.item)}>
        <fieldset className="education-exp ">
          <label htmlFor="school">School</label>
          <input type="text" id="school" onChange={this.handleChange} />
          <label htmlFor="subject">Course of Study</label>
          <input type="text" id="subject" onChange={this.handleChange} />
          <label htmlFor="date">Date Completed</label>
          <input type="date" id="date" onChange={this.handleChange} />
        </fieldset>
        <button type="submit">Add Experience</button>
      </form>
    );
  }
}

export default EducationSectionForm;
