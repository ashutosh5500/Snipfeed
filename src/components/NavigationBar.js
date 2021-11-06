import React from 'react';
import './component.scss'
import {BrushFill, Clipboard, Front} from "react-bootstrap-icons";

const NavigationBar = () => {
    return (
        <nav className={"NavigationBar"}>
            <div className="nav nav-tabs NavigationItems" id="nav-tab" role="tablist">
                <div className={"d-flex"}>

                    <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                            type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <Front/>
                        <span>Home</span>
                    </button>

                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <BrushFill/>
                        <span>Profile</span>
                    </button>
                </div>
                <div className={"CopyLink"}>
                    <div> https://link.snipfeed.co/ashutosh</div>
                    <button>Copy</button>
                </div>
            </div>

        </nav>
    );
};

export default NavigationBar;