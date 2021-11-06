import React from 'react';
import CustomLinkHover from '../assets/images/custom-link-hover.svg'

const IconCardHover = (props) => {
    const {hoverCard, hoverCardHeading, hoverCardText} = props
    return (
        <div className="card IconCardHover">
            <div className={"IconCardHoverImage"}>
                <img src={hoverCard} className="card-img-top" alt="..."/>
            </div>
            <div className="mt-3">
                <h5 className="card-title">{hoverCardHeading}</h5>
                <p className="card-text">{hoverCardText}</p>
            </div>
        </div>
    );
};

export default IconCardHover;