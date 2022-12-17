import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const ExperienceSectionForm = (props) => {
  const { item } = props;

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "company":
        props.onItemChange({
          id: props.item.id,
          company: e.target.value,
          position: props.item.position,
          tasks: props.item.tasks,
          date: props.item.date,
        });
        break;
      case "position":
        props.onItemChange({
          id: props.item.id,
          company: props.item.company,
          position: e.target.value,
          tasks: props.item.tasks,
          date: props.item.date,
        });
        break;
      case "tasks":
        props.onItemChange({
          id: props.item.id,
          company: props.item.company,
          position: props.item.position,
          tasks: e.target.value,
          date: props.item.date,
        });
        break;
      case "date":
        props.onItemChange({
          id: props.item.id,
          company: props.item.company,
          position: props.item.position,
          tasks: props.item.tasks,
          date: e.target.value,
        });
        break;
      default:
    }
  };

  const onSubmit = () => {
    props.createItem(props.item);
    props.toggleForm();
    props.onItemChange({
      id: uniqid(),
      company: "",
      position: "",
      tasks: "",
      date: "",
    });
  };

  const onUpdate = () => {
    props.toggleForm();
    props.toggleisEditingItem();
    props.editItems(props.item);
    props.onItemChange({
      id: uniqid(),
      company: "",
      position: "",
      tasks: "",
      date: "",
    });
  };

  const btnTitle = () => {
    if (props.isEditingItem === true) {
      return "Update Experience";
    }
    return "Add this Experience";
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (props.isEditingItem === false) {
          onSubmit();
        } else {
          onUpdate();
        }
      }}
    >
      <fieldset className="practical-exp">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={item.company}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={item.position}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="tasks">Description of Tasks</label>
        <input
          type="text"
          id="tasks"
          value={item.tasks}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="date">Date Completed</label>
        <input
          type="date"
          id="date"
          value={item.date}
          onChange={handleInputChange}
          required
        />
        <button className="checkmark-submit" type="submit" title={btnTitle()}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
      </fieldset>
    </form>
  );
};

export default ExperienceSectionForm;
