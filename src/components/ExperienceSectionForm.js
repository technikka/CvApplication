import { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

class ExperienceSectionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "company":
        this.setState({
          item: {
            id: this.state.item.id,
            company: e.target.value,
            position: this.state.item.position,
            tasks: this.state.item.tasks,
            date: this.state.item.date,
          },
        });
        break;
      case "position":
        this.setState({
          item: {
            id: this.state.item.id,
            company: this.state.item.company,
            position: e.target.value,
            tasks: this.state.item.tasks,
            date: this.state.item.date,
          },
        });
        break;
      case "tasks":
        this.setState({
          item: {
            id: this.state.item.id,
            company: this.state.item.company,
            position: this.state.item.position,
            tasks: e.target.value,
            date: this.state.item.date,
          },
        });
        break;
      case "date":
        this.setState({
          item: {
            id: this.state.item.id,
            company: this.state.item.company,
            position: this.state.item.position,
            tasks: this.state.item.tasks,
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
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    });
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <fieldset className="practical-exp">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={item.company}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            value={item.position}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="tasks">Description of Tasks</label>
          <input
            type="text"
            id="tasks"
            value={item.tasks}
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

export default ExperienceSectionForm;
