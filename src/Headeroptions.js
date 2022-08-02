import React from 'react'
import {Avatar} from "@material-ui/core";
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from "./firebase"


function Headeroptions({Icon,title,avatar}) {
  const user = useSelector(selectUser)
  return (
    <div className="header__options">
    {
      Icon &&         <Icon></Icon>
    }
  {
    avatar && <Avatar name={avatar} src={user.photoURL} onClick={firebase.auth().signOut()}/>
  }
      
      <span>{title}</span>
    </div>
  
    )
}

export default Headeroptions