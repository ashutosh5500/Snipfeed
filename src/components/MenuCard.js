import React, {Fragment} from 'react';
import Logo from '../assets/images/profile.svg'
import './component.scss'
import {Exclamation, ExclamationTriangle, Eye, Grid3x3, Grid3x3GapFill, Trash} from "react-bootstrap-icons";

const MenuCard = (props) => {
    const {cardTitle, cardIcon, headerText, cardText, cardType} = props
    return (
        <Fragment>
            {cardType === 'DEFAULT' ? <div className={"container MenuCard"}>
                    <div>
                        <div className={"page-header"}><span>{cardTitle}</span></div>
                    </div>
                    <div className={"CardDetail"}>
                        <div><img src={cardIcon} alt="profile"/></div>
                        <div className={"ps-3 lh-1"}>
                            <h6>{headerText}</h6>
                            <p>{cardText}</p>
                        </div>
                    </div>
                </div>
                :
                <div className={"container MenuCardAlert"}>
                    <div className={"page-header"}>
                        <div><span>{cardTitle}</span></div>
                        <div className={"page-header-icons"}>
                            <div><Trash/></div>
                            <div><Eye/></div>
                            <div><Grid3x3GapFill/></div>
                        </div>
                    </div>
                    <div className={"CardDetailAlert"}>
                        <div className={"d-flex align-items-center"}><img src={cardIcon} alt="profile"/>
                            <div className={"ps-3 lh-1"}>
                                <h6>{headerText}</h6>
                                    <p>{cardText}</p>
                            </div>
                        </div>
                        <ExclamationTriangle/>
                    </div>
                </div>}

        </Fragment>
    );
};

export default MenuCard;