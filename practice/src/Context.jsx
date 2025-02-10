import { createContext } from "react";
const users = [
    {
        name: "John Doe",
        email: "johndoe@example.com",
        address: {
            street: "123 Main St",
            city: "New York",
            country: "USA"
        }
    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        address: {
            street: "456 Elm St",
            city: "Los Angeles",
            country: "USA"
        }
    },
    {
        name: "Rahul Sharma",
        email: "rahulsharma@example.com",
        address: {
            street: "789 MG Road",
            city: "Mumbai",
            country: "India"
        }
    }
];

 export const Context=createContext(users);
