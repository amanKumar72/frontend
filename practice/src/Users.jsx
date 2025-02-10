import PropTypes from 'prop-types';
import User from "./User";
import { useContext } from 'react';
import { Context } from './Context';

function Users({ users }) {
    const { users1 } = useContext(Context);
    console.log(users1);    
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>
            <User user={user} />
          </li>
        </ul>
      ))}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Users;

