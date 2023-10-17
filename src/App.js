import { useCallback, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = useCallback((user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  }, []);

  return (
    <div>
      <UserForm addUser={addUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
