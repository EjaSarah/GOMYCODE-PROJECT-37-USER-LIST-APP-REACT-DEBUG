/* eslint-disable react/prop-types */
import { useState } from "react";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name };
    addUser(newUser);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
