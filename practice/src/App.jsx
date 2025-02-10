import Clock from "./Clock";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import { Context } from "./Context";
import Error from "./Error";
import NavBar from "./NavBar";
// import User from "./User";

const users = [
  {
    name: "John Doe",
    id: 1,
    email: "johndoe@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  },
  {
    name: "Jane Smith",
    id: 2,
    email: "janesmith@example.com",
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
  },
  {
    name: "Rahul Sharma",
    id: 3,
    email: "rahulsharma@example.com",
    address: {
      street: "789 MG Road",
      city: "Mumbai",
      country: "India",
    },
  },
];

function App() {
  return (
    <Context.Provider value={{ users1: users }}>
      <Routes>
        {/* layout */}
        <Route element={<NavBar />}>
          <Route path="/" element={<h1>home</h1>}></Route>
          <Route path="clock">
            {/* index for clock */}
            <Route index element={<Clock colorval="red" />}></Route>
            {/*optional segment ? */ }
            <Route path="form/registration?" element={<Form />}></Route>
            <Route path="users" element={<Users users={users} />}></Route>
          </Route>
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
