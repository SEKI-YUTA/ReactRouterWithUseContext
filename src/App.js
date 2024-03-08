import logo from "./logo.svg";
import "./App.css";
import { useContext, createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {
    const [userDataState, setUserDataState] = useState({ userId: "123" });
    const UserContext = createContext(userDataState);
    const userData = useContext(UserContext);
    const router = createBrowserRouter([
        {
            path: "/first",
            element: (
                <FirstPage
                    userContext={UserContext}
                    setUserDataState={(data) => {
                        setUserDataState(data);
                    }}
                />
            ),
        },
        {
            path: "/second",
            element: <SecondPage userContext={UserContext}/>,
        },
    ]);
    return (
        <UserContext.Provider value={userData}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}

export default App;
