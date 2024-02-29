import React from "react"
import { useNavigate } from "react-router-dom";

const LogButton = () => {
    const navigate = useNavigate();
    const storedToken = localStorage.getItem("authToken") ?? undefined;

    const onButtonClick = (event) => {
        console.log('click', event.target.id);
        const id = event.target.id;
        if (id === 'logOutButton') {
            localStorage.removeItem("authToken");
            window.location.reload();
        } else if (id === 'itemsButton') {
            navigate("/items");
        } else {
            navigate("/login");
        }
    }
    console.log("storedToken: ", storedToken)
    if (storedToken && storedToken?.length > 0) {

        return <div><input
            id={"logOutButton"}
            type="button"
            onClick={onButtonClick}
            value="Log out" />

            < input
                id={"itemsButton"}
                type="button"
                onClick={onButtonClick}
                value="My Items" />
        </div>

    } else {
        return <input
            id={"logInButton"}
            type="button"
            onClick={onButtonClick}
            value="Log in" />
    }
}

export default LogButton