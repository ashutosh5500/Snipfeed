import React from 'react';
import NavigationBar from "./NavigationBar";
import Menu from "./Menu";

const Header = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Menu/>
        </React.Fragment>
    );
};

export default Header;