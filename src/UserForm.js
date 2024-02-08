import { useCallback, useState } from "react";

function UserForm({ addUser }) {
  const [values, setValues] = useState({ name: "", email: "" });

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addUser({ ...values });
      setValues({ name: "", email: "" });
    },
    [values, addUser]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" value={values.email} onChange={handleChange} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
