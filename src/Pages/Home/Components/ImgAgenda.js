import React from "react";

export default function ImgAgenda({src}){
    let imgStyles = {
        width: 100 + "%",
        height: "auto"
    }

    return <img src={src} alt="slide-img" style={imgStyles}></img>
}
