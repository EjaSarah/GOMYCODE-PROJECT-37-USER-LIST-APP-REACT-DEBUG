import "./App.css";
import { useState } from "react";
import Header from "./components/Headers";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "John Doe" }]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Header title="User Management" />
      <UserList users={users} />
      <AddUser addUser={addUser} />
    </div>
  );
}

export default App;
