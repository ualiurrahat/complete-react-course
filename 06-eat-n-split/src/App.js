import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  // state to display or set freinds in FriendsList component
  // for the first time rendering, the initialFriends array
  // will be displayed as friends.
  const [friends, setFriends] = useState(initialFriends);
  // declaring a state to display FormAddFriend component
  // by default this component is not displayed
  // when user clicks 'Add freind' it will show up
  const [showAddFreindForm, setShowAddFriendForm] = useState(false);

  // event handle function to display shwoAddFreindForm
  function handleShowAddFriend() {
    setShowAddFriendForm((show) => !show);
  }
  // event handle function to add new frineds
  // from the formAddFriend form submit info
  function handleAddFreind(friend) {
    setFriends((friends) => [...friends, friend]);
    // after adding friend in the friend list,
    // closing the add friend form component
    setShowAddFriendForm(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {/* conditionally rendering the show add freind component */}
        {showAddFreindForm && <FormAddFreind onAddFreind={handleAddFreind} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFreindForm ? "Close" : "Add freind"}
        </Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance < 0 && (
        <p className="red">
          You owes {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFreind({ onAddFreind }) {
  // states to add new friend
  // setting up friend's name and image
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // function to handle the submit event of the form
  function handleSubmit(e) {
    // preventing the default rendering
    // whenever form is submitted
    e.preventDefault();
    // guard clause
    // no need to create new friend
    // if name or image value is not set i.e. null
    if (!name || !image) return;
    // creating new friend
    // generating unique id for each new frined added
    const id = crypto.randomUUID();
    const newFreind = {
      id,
      name,
      balance: 0,
      image: `${image}?u=${name}`,
    };
    // adding the new friend to the friends list
    onAddFreind(newFreind);
    // after submitting the form, set name and image
    // to default value for further friend addition
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧑 Your expense</label>
      <input type="text" />

      <label>👬 X's expense</label>
      <input type="text" disabled />

      <label>💰 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
