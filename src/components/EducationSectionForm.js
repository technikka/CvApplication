import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const EducationSectionForm = (props) => {
  const { item } = props;

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "school":
        props.onItemChange({
          id: props.item.id,
          school: e.target.value,
          subject: props.item.subject,
          date: props.item.date,
        });
        break;
      case "subject":
        props.onItemChange({
          id: props.item.id,
          school: props.item.school,
          subject: e.target.value,
          date: props.item.date,
        });
        break;
      case "date":
        props.onItemChange({
          id: props.item.id,
          school: props.item.school,
          subject: props.item.subject,
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
      school: "",
      subject: "",
      date: "",
    });
  };

  const onUpdate = () => {
    props.toggleForm();
    props.toggleisEditingItem();
    props.editItems(props.item);
    props.onItemChange({
      id: uniqid(),
      school: "",
      subject: "",
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
      <fieldset className="education-exp ">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          value={item.school}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="subject">Course of Study</label>
        <input
          type="text"
          id="subject"
          value={item.subject}
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

export default EducationSectionForm;
