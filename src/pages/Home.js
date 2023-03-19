import React from "react";
import Title from "../components/Title";
import ProfileImage from "../components/ProfileImage";

function Home() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#5386E4", height: "100%"}}>
            <Title title="Piers Ebdon"/>
            <ProfileImage />
        </div>
    )
}

export default Home