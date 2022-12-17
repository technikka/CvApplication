import { useState } from "react";
import uniqid from "uniqid";
import EducationSectionForm from "./EducationSectionForm";
import EducationSectionItem from "./EducationSectionItem";

const EducationSection = (props) => {
  const [item, setItem] = useState({
    id: uniqid(),
    school: "",
    subject: "",
    date: "",
  });
  const [isEditingItem, setIsEditingItem] = useState(false);
  const toggleisEditingItem = () => {
    setIsEditingItem(!isEditingItem);
  };
  const onItemChange = (newState) => {
    setItem(newState);
  };
  const editItem = (itemToEdit) => {
    onItemChange({
      id: itemToEdit.id,
      school: itemToEdit.school,
      subject: itemToEdit.subject,
      date: itemToEdit.date,
    });
    toggleisEditingItem();
    props.toggleForm();
  };
  const displayItems = () => {
    return (
      <ul>
        {props.items.map((item) => {
          return (
            <EducationSectionItem
              item={item}
              key={item.id}
              editItem={editItem}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      {props.formShowing === true && (
        <EducationSectionForm
          onItemChange={onItemChange}
          item={item}
          createItem={props.createItem}
          toggleForm={props.toggleForm}
          isEditingItem={isEditingItem}
          editItem={editItem}
          toggleisEditingItem={toggleisEditingItem}
          editItems={props.editItems}
        />
      )}
      {props.items.length > 0 && displayItems()}
    </div>
  );
};

export default EducationSection;
