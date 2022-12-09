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

  onSubmit(event) {
    console.log('in function')
    this.props.createItem(event, this.state.item);
    this.setState({
      item: {
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
          />
          <label htmlFor="subject">Course of Study</label>
          <input 
            type="text" 
            id="subject"
            value={item.subject} 
            onChange={this.handleChange} 
          />
          <label htmlFor="date">Date Completed</label>
          <input 
            type="date" 
            id="date"
            value={item.date} 
            onChange={this.handleChange} 
            />
        </fieldset>
        <button type="submit">Add Experience</button>
      </form>
    );
  }
}

export default EducationSectionForm;
