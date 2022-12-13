import React, { Component } from "react";
import "./styles/app.css";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Section from "./components/Section";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>General Information</h1>
        <form>
          <fieldset className="general-info">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" />
          </fieldset>
        </form>
        <Section title="Educational Experience">
          <EducationSection />
        </Section>

        <Section title="Practical Experience">
          <ExperienceSection />
        </Section>
        <p>Submit the entire form only when finished adding all experience.</p>
        <button
          className="submit-cv"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          Submit CV
        </button>
      </div>
    );
  }
}

export default App;
