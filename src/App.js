import React, { Component } from "react";
import "./styles/app.css";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <form>
          <fieldset className="general-info">
            <legend>General Information</legend>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel"/>
          </fieldset>
        </form>
        {/* // EducationSection here
        // ExperienceSection here
        // final submit button */}
      </div>
    )
  }

}

export default App;
