import { format } from "date-fns";
import "../styles/item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const EducationSectionItem = (props) => {
  const { item } = props;
  const formatDate = (date) => {
    return format(new Date(date), "MMM do yyyy");
  };

  return (
    <div>
      <div className="icons">
        <FontAwesomeIcon
          className="item-icon"
          title="Edit this item"
          icon={faPenToSquare}
          onClick={() => props.editItem(item)}
        />
        <FontAwesomeIcon
          className="item-icon"
          title="Delete this item"
          icon={faTrashCan}
          onClick={() => props.deleteItem(item)}
        />
      </div>
      <li key={item.id}>
        {"Studied " + item.subject + " at " + item.school}
        <br />
        {"Completed on " + formatDate(item.date)}
        <br />
      </li>
    </div>
  );
};

export default EducationSectionItem;
