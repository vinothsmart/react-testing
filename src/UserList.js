const UserList = ({ users }) => {
  const rendredUsers = users.map((user) => (
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{rendredUsers}</tbody>
    </table>
  );
};

export default UserList;
