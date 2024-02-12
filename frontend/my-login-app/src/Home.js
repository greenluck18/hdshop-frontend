import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn } = props
    console.log(props)
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        navigate('/login')
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page. Welcome!
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
        </div>


    </div>
}

export default Home