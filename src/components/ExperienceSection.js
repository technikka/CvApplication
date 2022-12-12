import { Component } from "react";
import uniqid from "uniqid";
import Section from "./Section";
import ExperienceSectionForm from "./ExperienceSectionForm";
import ExperienceSectionItem from "./ExperienceSectionItem";

class ExperienceSection extends Component {
  constructor() {
    super();

    this.state = {
      item: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        date: "",
      },
    }

    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <Section title="Practical Experience">
        <ExperienceSectionForm onItemChange={this.onItemChange} item={this.state.item} />
        <ExperienceSectionItem /> 
      </Section>
    )
  }
}

export default ExperienceSection;
