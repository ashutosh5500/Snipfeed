import React, {useState} from 'react';
import './component.scss'
import MenuContent from "./MenuContent";
import MenuCard from "./MenuCard";
import MobileView from "./MobileView";
import Profile from '../assets/images/profile.svg'
import TextUnderline from '../assets/images/text-underline.svg'
import Music from '../assets/images/music1.svg'
import NewLink from '../assets/images/new-link.svg'
import ToggleButton from "./ToggleButton";
import IconCardHover from "../generics/IconCardHover";


const Menu = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    const menuContent = [{headerText: "Add Block"}];

    const menuCard = [
        {
            id: 1,
            cardTitle: "Page Header",
            cardIcon: Profile,
            headerText: "Add Your Bio",
            cardText: "Profile Pic,Name and Bio",
            cardType: 'DEFAULT'
        },
        {
            id: 2,
            cardTitle: "Text",
            cardIcon: TextUnderline,
            headerText: "Text Block",
            cardType: 'ERROR'
        },
        {
            id: 3,
            cardTitle: "Music Preview",
            cardIcon: Music,
            headerText: "Music/Podcast Preview",
            cardText: "Embed a preview of podcast or music",
            cardType: 'ERROR'
        },
        {
            id: 4,
            cardTitle: "Custom-Link",
            cardIcon: NewLink,
            headerText: "Link Title",
            cardText: "Link URL",
            cardType: 'ERROR'
        },
        {
            id: 5,
            cardTitle: "Custom-Link",
            cardIcon: NewLink,
            headerText: "Link Title",
            cardText: "Link URL",
            cardType: 'ERROR'
        },
    ]

    return (
        <div className={"row m-0"}>
            <div className="col-6 p-0">
                <div className={"Menu p-4"}>
                    <MenuContent toggleMenu={toggleMenu}/>
                    <ToggleButton setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
                    {/*<MenuContent headerText={"Monetizable Block"}/>*/}
                    {
                        menuCard.map(item => {
                            return <div key={item.id}><MenuCard {...item}/>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className="col-6">
                <MobileView/>
            </div>
        </div>
    );
};

export default Menu;