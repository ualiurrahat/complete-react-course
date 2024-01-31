import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
