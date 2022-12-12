import { Component } from "react";
import uniqid from "uniqid";
import Section from "./Section";
import EducationSectionForm from "./EducationSectionForm";
import EducationSectionItem from "./EducationSectionItem";

class EducationSection extends Component {
  constructor() {
    super();

    this.state = {
      item: {
        id: uniqid(),
        school: "",
        subject: "",
        date: "",
      },
    };

    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <Section title="Educational Experience">
        <EducationSectionForm onItemChange={this.onItemChange} item={this.state.item} />
        <EducationSectionItem />
      </Section>
    );
  }
}

export default EducationSection;
