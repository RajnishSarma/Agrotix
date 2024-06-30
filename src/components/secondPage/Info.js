import React from 'react';
import InfoCard from "./InfoCard";
const Info = (props) => {
    console.log(props);
    const renderInfo = props.detail.map((detail) => {
        return <
            InfoCard detail = { detail }
        />;
    });
    return <div className = 'ui celled list' > { renderInfo } </div>
};

export default Info;