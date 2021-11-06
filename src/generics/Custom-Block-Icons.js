import React, {Fragment} from 'react';
import './generic.scss'
import IconCardHover from "./IconCardHover";

const CustomBlockIcons = (props) => {
    const {blockIcon, iconBackground, iconText} = props;

    return (
        <Fragment>

            <div className={"Custom-Block-Icons"}>
                <div>
                    <img style={iconBackground} src={blockIcon} alt="Link"/>
                </div>
                <p className={"mt-2"}>{iconText}</p>
            </div>
        </Fragment>
    );
};

export default CustomBlockIcons;