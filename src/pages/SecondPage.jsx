import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SecondPage({ userContext }) {
    const userData = useContext(userContext);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Second Page</h1>
            <p>{userData.userId}</p>
            <button onClick={() => {
                // プログラムから画面を移動させる時はnavigateを使う
                navigate("/first");
            }}>FirstPageへ</button>
        </div>
    );
}
export default SecondPage;
