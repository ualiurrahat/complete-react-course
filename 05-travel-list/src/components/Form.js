import { useState } from "react";

export default function Form({ onAddItems }) {
  // using description state to create items
  // based on user given data provided by the form
  // description is the item name user wrote on the form
  const [description, setDescription] = useState("");
  // using quantity state to manage quantitiy of each item
  // user provides in the form.
  const [quantity, setQuantity] = useState(1);
  // function  to prevent the reloading(HTML file nature) whenever add button is clicked or enter is pressed
  // in form input i.e. form is submitted.
  function handleSubmit(e) {
    e.preventDefault();
    // condition:if user tries to add an item with empty string i.e. null string as description
    // it means there is no items to be added. So is description is null,just simply returning
    // from the funciton without adding the null item.
    if (!description) return;
    // adding new items from user given submit form
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    // after adding new item, resetting description as null string
    // and quantity as 1, so that user can add other items in the list.
    setDescription("");
    setQuantity(1);
  }
  return (
    <form form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
