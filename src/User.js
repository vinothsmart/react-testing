import React from "react";

const User = ({ users }) => {
  return users.map((user) => (
    <tr key={user.email}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));
};

export default User;
