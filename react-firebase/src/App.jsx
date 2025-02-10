import { useEffect, useState } from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebase, auth } from "./context/Firebase";
function App() {
  const [data, setdata] = useState({ name: "", password: "" });
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is logged in", user);
        setUser(user);
      } else {
        console.log("user is logged out");
        setUser(null);
        // history.push('/')
      }
    });
  }, []);
  const fb = useFirebase();

  const addDocument = () => {
    fb.addDocument("users", { name: "aman", password: "aman" });
  };

  const addDocumentToRDB = () => {
    fb.addIntoRealtimeDB("users", { name: "yash", password: "yash" });
  };

  const getDocument = () => {
    console.log(fb.getAllDocuments("users"));
  };

  const getDocfromRDB = () => {
    fb.getFromRealtimeDB("users");
  };

  return (
    <>
      {user && (
        <p>
          Welcome {user.email} <br />
          <button onClick={() => fb.signOutUser()}>signout</button>
          <button onClick={addDocumentToRDB}>addtoRDB</button>
          <button onClick={addDocument}>add</button>
          <button onClick={getDocfromRDB}>getDocfromRDB</button>
          <button onClick={getDocument}>getDoc</button>
        </p>
      )}
      {!user && (
        <div>
          <input
            type="email "
            name="email"
            id=""
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />
          <br />
          <input
            type="password "
            name="email"
            id=""
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <br />
          <button onClick={() => fb.signUp(data.name, data.password)}>
            signUp
          </button>
          <br />
          <button onClick={() => fb.signIn(data.name, data.password)}>
            signIn
          </button>
          <br />
          <button onClick={() => fb.signInWithGoogle()}>
            signInWithGoogle
          </button>
          <br />
        </div>
      )}
    </>
  );
}

export default App;
