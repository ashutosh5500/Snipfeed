import React from 'react';
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";

const ToggleButton = ({setToggleMenu, toggleMenu}) => {
    return (
        <div className={"ToggleButton"} onClick={() => {
            setToggleMenu(!toggleMenu);
        }}>
            <button>{toggleMenu ? <ChevronDown/> : <ChevronUp/>}</button>
        </div>
    );
};

export default ToggleButton;