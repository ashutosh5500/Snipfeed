import React, {Fragment} from 'react';
import CustomBlockIcons from "../generics/Custom-Block-Icons";
import CustomLink from "../assets/images/custom-link.svg"
import Mail from "../assets/images/mailing-list.svg"
import Social from "../assets/images/social.svg"
import TextIcon from "../assets/images/text.svg"
import Music from "../assets/images/music.svg"
import Video from "../assets/images/video.svg"
import Product from "../assets/images/product.svg"
import LiveStream from "../assets/images/live-stream.svg"
import Shoutout from "../assets/images/shoutout.svg"
import Content from "../assets/images/content.svg"
import Tipping from "../assets/images/tip.svg"
import CustomLinkHover from '../assets/images/custom-link-hover.svg'
import MailHover from '../assets/images/mailing-list-hover.svg'
import SocialHover from '../assets/images/social-hover.svg'
import TextIconHover from '../assets/images/text-hover.svg'
import MusicHover from '../assets/images/music-hover.svg'
import VideoHover from '../assets/images/video-hover.svg'
import ProductHover from '../assets/images/product-hover.svg'
import LiveStreamHover from '../assets/images/live-streams-hover.svg'
import ShoutoutHover from '../assets/images/shoutouts-hover.svg'
import ContentHover from '../assets/images/content-hover.svg'
import TippingHover from '../assets/images/tipping-hover.svg'
import './component.scss'
import '../generics/generic.scss'
import IconCardHover from "../generics/IconCardHover";

const addBlock = [
    {
        id: 1,
        icon: CustomLink,
        iconBackground: {backgroundColor: '#f2f1ff'},
        iconText: "Custom Link",
        hoverCard: CustomLinkHover,
        hoverCardHeading: "Custom Link",
        hoverCardText: "Link anything! Everything! Sky is the limit!",
        hoverClassName: 'left',
    },
    {
        id: 2,
        icon: Mail,
        iconBackground: {backgroundColor: '#e7fdf5'},
        iconText: "Mailing List",
        hoverCard: MailHover,
        hoverCardHeading: "Mailing List",
        hoverCardText: "Use this block to collect emails and build a mailing list.",
        hoverClassName: 'left',
    },
    {
        id: 3,
        icon: Social,
        iconBackground: {backgroundColor: '#edfbff'},
        iconText: "Link Your Socials",
        hoverCard: SocialHover,
        hoverCardHeading: "Link Your Socials",
        hoverCardText: "Link your socials so your followers can easily find all of your content",
        hoverClassName: 'left',
    },
    {
        id: 4,
        icon: TextIcon,
        iconBackground: {backgroundColor: '#fcf0df'},
        iconText: "Text",
        hoverCard: TextIconHover,
        hoverCardHeading: "Text",
        hoverCardText: "Add a custom text and style it the way you want",
        hoverClassName: 'left',
    },
    {
        id: 5,
        icon: Music,
        iconBackground: {backgroundColor: '#f2f5ff'},
        iconText: "Music/Podcast Preview",
        hoverCard: MusicHover,
        hoverCardHeading: "Music/Podcast Preview",
        hoverCardText: "Embed a preview of your podcast or track (Spotify, Apple Music, Soundcloud, ...)",
        hoverClassName: 'left',
    },
    {
        id: 6,
        icon: Video,
        iconBackground: {backgroundColor: '#fff3f0'},
        iconText: "Video Preview",
        hoverCard: VideoHover,
        hoverCardHeading: "Video Preview",
        hoverCardText: "Embed previews of your videos from YouTube, TikTok, Vimeo, etc.",
        hoverClassName: 'right',
    },
    {
        id: 7,
        icon: Product,
        iconBackground: {backgroundColor: '#e8fcf6'},
        iconText: "Product",
        hoverCard: ProductHover,
        hoverCardHeading: "Product",
        hoverCardText: "Link your product and let your followers purchase through Snipfeed!",
        hoverClassName: 'right',
    },
]

const monetizableBlock = [
    {
        id: 1,
        icon: LiveStream,
        iconBackground: {backgroundColor: '#ffeef2'},
        iconText: "LiveStreams",
        hoverCard: LiveStreamHover,
        hoverCardHeading: "LiveStreams",
        hoverCardText: "Allow your followers to purchase tickets to live events (e.g. meet and greets, live masterclasses) hosted through Zoom or Google Meet.",
        hoverClassName: 'left',
    },
    {
        id: 2,
        icon: Shoutout,
        iconBackground: {backgroundColor: '#fef8d4'},
        iconText: "Shoutouts/Q&As",
        hoverCard: ShoutoutHover,
        hoverCardHeading: "Shoutouts/Q&As",
        hoverCardText: "Answer questions and get paid to respond to enquiries.",
        hoverClassName: 'left',
    },
    {
        id: 3,
        icon: Content,
        iconBackground: {backgroundColor: '#f3eeff'},
        iconText: "Exclusive Content",
        hoverCard: ContentHover,
        hoverCardHeading: "Exclusive Content",
        hoverCardText: "Sell exclusive digital photos, videos, ebooks, guides, masterclasses, audio tracks and more!",
        hoverClassName: 'right',
    },
    {
        id: 4,
        icon: Tipping,
        iconBackground: {backgroundColor: '#fff5f7'},
        iconText: "Tipping",
        hoverCard: TippingHover,
        hoverCardHeading: "Tipping",
        hoverCardText: "Followers can send a one time payment or monthly subscription.",
        hoverClassName: 'right',
    },
]


const MenuContent = (props) => {
    const {toggleMenu} = props;
    return (
        <Fragment>
            <div className={"MenuContent"}>
                <h6 className={'mb-4'}>Add Block</h6>
                <ul>
                    {addBlock.map(item => <li className={"showHover"} key={item.id}><CustomBlockIcons
                        iconBackground={item.iconBackground}
                        blockIcon={item.icon}
                        iconText={item.iconText}
                    />
                        <div className={`showHoverCards ${item.hoverClassName}`}><IconCardHover
                            hoverCard={item.hoverCard}
                            hoverCardHeading={item.hoverCardHeading}
                            hoverCardText={item.hoverCardText}
                        /></div>
                    </li>)}
                </ul>
            </div>
            {<div className={"MenuContent"}
                  style={{
                      transition: 'all 0.08s ease-out 0s',
                      height: toggleMenu ? 'auto' : '0',
                      overflow: toggleMenu ? '' : 'hidden',
                      padding: toggleMenu ? '20px' : '0',
                      margin: toggleMenu ? 'inherit' : '0'
                  }}>
                <h6 className={"mb-4"}>Monetizable Block</h6>
                <ul>
                    {monetizableBlock.map(item => <li className={"showHover"} key={item.id}><CustomBlockIcons
                        iconBackground={item.iconBackground}
                        blockIcon={item.icon}
                        iconText={item.iconText}
                    />
                        <div className={`showHoverCards ${item.hoverClassName}`}><IconCardHover
                            hoverCard={item.hoverCard}
                            hoverCardHeading={item.hoverCardHeading}
                            hoverCardText={item.hoverCardText}
                        /></div>
                    </li>)}
                </ul>
            </div>}
        </Fragment>
    );
};

export default MenuContent;