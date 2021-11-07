import React, {Fragment} from 'react';
import Menu from "./Menu";
import NavigationBar from "./NavigationBar";

const Dashboard = () => {
    return (
       <Fragment>
           <NavigationBar/>
           <Menu/>
       </Fragment>
    );
};

export default Dashboard;