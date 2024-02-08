import User from "./User";

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">
        <User users={users} />
      </tbody>
    </table>
  );
};

export default UserList;
