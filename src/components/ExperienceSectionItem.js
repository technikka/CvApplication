import { Component } from "react";
import { format } from "date-fns";
import "../styles/item.css"
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
        <div className="icons">
          <FontAwesomeIcon
            className="item-icon"
            title="Edit this item"
            icon={faPenToSquare}
            onClick={() => this.props.editItem(item)}
          />
          <FontAwesomeIcon
            className="item-icon"
            title="Delete this item"
            icon={faTrashCan}
            onClick={() => this.props.deleteItem(item)}
          />
        </div>
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
