import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";

function FirstPage({ userContext, setUserDataState }) {
    const userData = useContext(userContext);
    return (
        <div>
            <h1>First Page</h1>
            <input
                type="text"
                value={userData.userId}
                onChange={(event) => {
                    console.log(event.target.value);
                    setUserDataState({ userId: event.target.value });
                }}
            />
            <p>{JSON.stringify(userData)}</p>
            <Link to="/second">second pageへ</Link>
        </div>
    );
}
export default FirstPage;
