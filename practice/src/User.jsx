
import PropTypes from 'prop-types'

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};
function User({ user }) {
  return (
    <div>
      <h1>{user.id}</h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
}


export default User;
