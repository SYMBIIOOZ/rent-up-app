import React from "react";

function PropertyTypeCard(props) {
    const {type} = props;

    return (
        <div>
            <div className="property-type-card">
                
                <b>{type.name}</b><br/>
                <span>{type.count} property</span>
            </div>
        </div>
    );
}

export default PropertyTypeCard;

