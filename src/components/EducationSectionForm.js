import { Component } from "react";

class EducationSectionForm extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <form>
        <fieldset className="education-exp ">
          <label htmlFor="school">School</label>
          <input type="text" id="school"/>
          <label htmlFor="subject">Course of Study</label>
          <input type="text" id="subject"/>
          <label htmlFor="date">Date Completed</label>
          <input type="date" id="date" />
        </fieldset>
      </form>
    )
  }
}

export default EducationSectionForm