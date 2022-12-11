import { Component } from "react";
import Section from "./Section";
import EducationSectionForm from "./EducationSectionForm";
import EducationSectionItem from "./EducationSectionItem";

class EducationSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Section title="Educational Experience">
        <EducationSectionForm />
        <EducationSectionItem /> 
      </Section>
    )
  }
}

export default EducationSection;
