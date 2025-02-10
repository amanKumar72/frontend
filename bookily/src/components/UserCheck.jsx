import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../context/Firebase'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function UserCheck({children}) {
    const navigate=useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("user is logged in", user);
          } else {
            console.log("user is logged out");
            navigate('/signin')
          }
        });
      }, []);
  return (
    <>{children}</>
  )
}

export default UserCheck