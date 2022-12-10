import { Component } from "react";
import { format } from "date-fns";

class EducationSectionItem extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    return format(new Date(date), "MMM do yyyy")
  }

  render() {
    const { item } = this.props;
    return (
      <li key={item.id}>
        {"Studied " +
          item.subject +
          " at " +
          item.school}
          <br /> 
          {"Completed studies on " +
          this.formatDate(item.date)}
      </li>
    );
  }
}

export default EducationSectionItem;
