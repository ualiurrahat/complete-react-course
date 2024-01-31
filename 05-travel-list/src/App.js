import { useState } from "react";

export default function App() {
  // using items state to update packing list
  // with user added new item
  // items is the array of item that user added in the packing list
  // by submitting the items in the form
  const [items, setItems] = useState([]);
  // function to add items in the packing list
  // based on user entered items in the form
  // funciton takes the item added by user in the forum as parameter
  // and returns a new array of items including this item with all the other ones.
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  // function to delete items from packing list
  // when the red cross button placed after the item name is clicked
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // function to update items based on checkbox clicked
  // when checkbox is clicked, means item has been packed.
  // if unchecked again,means items has not been packed.
  // so need to toggle the packed property of item whenever checkbox is clicked.
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // function to clear list when clear list button is clicked
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  // state to update sotring list by user given input
  const [sortBy, setSortBy] = useState("input");
  // to store items in sorted fashion
  let sortedItems;
  // sorting by input : items will be seen by the order user entered items on the packing list
  if (sortBy === "input") sortedItems = items;
  // sorted by items description.
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  // sorting by packed status : packed items will go to end of the list
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {/* options for sorting items by user given choice  */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/* button to clear the packing list  */}
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  // if there is no item
  // show this message
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
