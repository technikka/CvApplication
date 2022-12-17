import React, { useState } from "react";
import "../styles/section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Section = (props) => {
  const [items, setItems] = useState([]);
  const [formShowing, setFormShowing] = useState(false);

  const toggleForm = () => {
    setFormShowing(!formShowing);
  };
  const createItem = (newItem) => {
    setItems(items.concat(newItem));
  };
  const editItems = (editedItem) => {
    setItems(
      items.map((item) => {
        if (item.id === editedItem.id) {
          item = editedItem;
        }
        return item;
      })
    );
  };
  const deleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  return (
    <div className="section">
      <h1>{props.title}</h1>
      <button
        className="form-control-btn"
        title="Add Experience / Hide Form"
        onClick={toggleForm}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {/* The specific section component */}
      {React.createElement(props.children.type, {
        formShowing: formShowing,
        createItem: createItem,
        toggleForm: toggleForm,
        items: items,
        editItems: editItems,
        deleteItem: deleteItem,
      })}
      {items.length === 0 && (
        <p>Click the button above to add experience to this field.</p>
      )}
    </div>
  );
};

export default Section;
