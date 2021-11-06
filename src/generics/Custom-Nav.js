import React from 'react';
import './generic.scss'

const CustomNav = (props) => {
    const {navIcon, navText, navActive} = props;
    return (
        <div className={`CustomNav ${navActive}`}>
            <div className={"fw-bold"}>
                {navIcon}
            </div>
            <div>
                {navText}
            </div>
        </div>
    );
};

export default CustomNav;