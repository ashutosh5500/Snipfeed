import React from 'react';
import './component.scss'
import {HeartFill} from "react-bootstrap-icons";
import Logo from '../assets/images/profile.svg'

const MobileView = () => {
    return (
        <div className={"Mobile"}>
            <div className={"MobileView"}>
                <div className={"p-3"}><HeartFill/></div>
                <div className={"MobileDetail"}>
                    <div>
                        <div className={"text-center profile-image"}>
                            <span><img src={Logo} alt=""/></span>
                        </div>
                        <h2>@ashutosh</h2>
                    </div>

                    <div className={"mt-5"}>
                        <p>
                            Powered by
                            <span className={"ms-2"}><HeartFill/></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileView;