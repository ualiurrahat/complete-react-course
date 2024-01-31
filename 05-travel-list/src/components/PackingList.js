import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
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
