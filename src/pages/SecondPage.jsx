import React, { useContext } from "react";

function SecondPage({ userContext }) {
    const userData = useContext(userContext);
    return (
        <div>
            <h1>Second Page</h1>
            <p>{userData.userId}</p>
        </div>
    );
}
export default SecondPage;
