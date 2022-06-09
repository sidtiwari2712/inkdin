import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@material-ui/core";

function Header() {
  return (
    <div className="header">
        <div className="header__left">
        <div className="header__logo">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1653757692~hmac=a7af1d952ef149de6bb39019b380ff74"></img>
        </div>
        <div className="header__search">
        <SearchIcon/>
        <input type="text" placeholder="Search"/>
            
        </div>
            
         </div>
        <div className="header__right">
            <Headeroptions Icon={HomeIcon} title="Home"/>
            <Headeroptions Icon={PeopleIcon} title="My network"/>
            <Headeroptions Icon={BusinessCenterIcon} title="Job"/>
            <Headeroptions Icon={MessageIcon} title="Messaging"/>
            <Headeroptions Icon={NotificationsIcon} title="Notification"/>
            <Headeroptions avatar={Avatar} title="Me"/>

        </div>
    </div>
  )
}

export default Header