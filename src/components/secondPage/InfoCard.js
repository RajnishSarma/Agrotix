import React from "react";


const InfoCard = (props) => {
    const { id, name, Fungicide, link, https1, https2, title, treatment, how, youtube } = props.detail;
    return ( 
    <div className = "item">
        <div className = "content">
            <div className = "header" > { name } </div>
            <div className = "xy" > { Fungicide } </div> 
            <div className = "ab" > { link } </div>
            <div className = "cc" > { https2 } </div>
            <div className = "ui" > { https1 } </div>
            <div className = "ux" > { title } </div>
            <div className = "xz" > { treatment } </div>
            <div className = "aa" > { how } </div>
            <div className = "bb" > { youtube } </div>
        </div>
    </div >
    );
};
export default InfoCard;