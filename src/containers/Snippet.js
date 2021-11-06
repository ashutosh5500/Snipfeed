import React, {Component} from 'react';
import SideNavigation from "../components/SideNavigation";
import Dashboard from "../components/Dashboard";
import ChatButton from "../components/ChatButton";

class Snippet extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <div className="row">
                    <div className="col-1 p-0">
                        <SideNavigation/>
                    </div>
                    <div className="col-11 p-0">
                        <Dashboard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Snippet;