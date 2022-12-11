import { Component } from "react";
import Section from "./Section";
import ExperienceSectionForm from "./ExperienceSectionForm";
import ExperienceSectionItem from "./ExperienceSectionItem";

class ExperienceSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Section title="Practical Experience">
        <ExperienceSectionForm />
        <ExperienceSectionItem /> 
      </Section>
    )
  }
}

export default ExperienceSection;
