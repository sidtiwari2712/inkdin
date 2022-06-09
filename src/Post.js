import React from 'react'
import { Avatar} from "@material-ui/core"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
function Post({name,description,message,photoURL}) {
  return (
    <div className="posts">
        <div className="post__header">
            <div className="post__headerLeft">
                <Avatar src={photoURL}/>
                <div className="post_profile_details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <MoreVertIcon/>
        </div>
        <div className="post__body"></div>
        <p>
            {message}
        </p>
        <div className="post__footer">
         <div className="post__footer__option">
             <ThumbUpAltIcon/>
             <span>Like </span>
         </div>   
         <div className="post__footer__option">
             <CommentIcon/>
             <span>Comment </span>
         </div> 
         <div className="post__footer__option">
             <ShareIcon/>
             <span>Share</span>
         </div> 
         <div className="post__footer__option">
             <SendIcon/>
             <span>send </span>
         </div> 
        </div>

    </div>
  )
}

export default Post