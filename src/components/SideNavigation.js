import React from 'react';
import CustomNav from "../generics/Custom-Nav";
import {Clipboard, CurrencyBitcoin, CurrencyDollar, EmojiSmile, Gear, HeartFill} from "react-bootstrap-icons";
import "./component.scss"

const SideNavigation = () => {

    // const sideNavigation=[
    //     {id:1, navText:"My Page", navIcon:<Clipboard/>},
    //     {id:1, navText:"My Page", navIcon:<Clipboard/>},
    //     {id:1, navText:"My Page", navIcon:<Clipboard/>},
    //     {id:1, navText:"My Page", navIcon:<Clipboard/>},
    //     {id:1, navText:"My Page", navIcon:<Clipboard/>},
    // ]

    return (
        <div className={"SideNavigation"}>
            <h3 className={"text-center mt-3"}>
                <HeartFill/>
            </h3>
            <div className={"SideNavigationItems"}>
                <div>
                    <CustomNav
                        navActive={"active"}
                        navIcon={<i className="far fa-clipboard"/>}
                        navText={"My Page"}/>
                    <CustomNav navIcon={<i className="fas fa-crown"/>}
                               navText={"Monetize"}/>
                    <CustomNav navIcon={<i className="far fa-chart-bar"/>}
                               navText={"Analytics"}/>
                    <CustomNav navIcon={<i className="fas fa-dollar-sign"/>}
                               navText={"Earnings"}/>
                    <CustomNav navIcon={<EmojiSmile/>}
                               navText={"Referrals"}/>
                    <CustomNav navIcon={<Gear/>}
                               navText={"Settings"}/>
                </div>
                <div>
                    <CustomNav navIcon={<i className="far fa-moon"/>}/>
                    <CustomNav navIcon={<i className="fas fa-sign-out-alt"/>}
                               navText={"Logout"}/>
                </div>
            </div>

        </div>

    );
};

export default SideNavigation;