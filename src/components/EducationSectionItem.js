import { Component } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faSquarePlus} from "@fortawesome/free-regular-svg-icons";

class EducationSectionItem extends Component {
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
          {"Studied " + item.subject + " at " + item.school}
          <br />
          {"Completed studies on " + this.formatDate(item.date)}
          <br />
        </li>
      </div>
    );
  }
}

export default EducationSectionItem;
