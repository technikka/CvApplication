import { useState } from "react";
import uniqid from "uniqid";
import ExperienceSectionForm from "./ExperienceSectionForm";
import ExperienceSectionItem from "./ExperienceSectionItem";

const ExperienceSection = (props) => {
  const [item, setItem] = useState({
    id: uniqid(),
    company: "",
    position: "",
    tasks: "",
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
      company: itemToEdit.company,
      position: itemToEdit.position,
      tasks: itemToEdit.tasks,
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
            <ExperienceSectionItem
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
        <ExperienceSectionForm
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

export default ExperienceSection;
