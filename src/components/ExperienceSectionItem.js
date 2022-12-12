import { Component } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

class ExperienceSectionItem extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    return format(new Date(date), "MMM do yyyy");
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
        <li key={item.id}>
          {item.position + " at " + item.company}
          <br />
          {"Tasks: " + item.tasks}
          <br />
          {"Completed on " + this.formatDate(item.date)}
          <br />
        </li>
      </div>
    );
  }
}

export default ExperienceSectionItem;
