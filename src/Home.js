import React from "react"
import LogButton from "./LogButton"

const Home = () => {

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page. Welcome!
        </div>
        <div className={"buttonContainer"}>
           <LogButton/>
        </div>
    </div>
}

export default Home