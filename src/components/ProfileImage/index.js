import React from "react";
import profileImage from "./PiersEbdon.png"
import "./style.css"

function ProfileImage() {
    return (
        <div style={{ paddingBottom: "32px"}}>
            <img src={profileImage} />
        </div>
    )       
}

export default ProfileImage