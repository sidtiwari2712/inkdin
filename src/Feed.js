import React, { useEffect, useState } from 'react'
import PhotoIcon from '@mui/icons-material/Photo';
import { Avatar } from "@material-ui/core"
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';
import "./css/feed.css"
import Post from './Post';
import { db } from './firebase';
import firebase from './firebase'


function Feed() {
    const [posts, setPost] = useState([]);
    const [input, setInput] = useState();
    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: "Siddharth tiwari",
            description: "This is test description",
            message: input,
            photoURL: "https://yt3.ggpht.com/if_2mAiMoQfmNEjbBS8wibWtgO2ue70mBG64RAoi-4QcyfOSc-pwHTJXEiVaiL8ydIxOv1aKffI=s88-c-k-c0x00ffffff-no-rj-mo",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    useEffect(() => {
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot => {
            console.log(snapshot);
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);

    return (
        <div className="feed">
            <div className="feed__input">
                <div className="feed__form">
                    <Avatar src="https://yt3.ggpht.com/if_2mAiMoQfmNEjbBS8wibWtgO2ue70mBG64RAoi-4QcyfOSc-pwHTJXEiVaiL8ydIxOv1aKffI=s88-c-k-c0x00ffffff-no-rj-mo" />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder="start a post" value={input} onChange={e => setInput(e.target.value)} />
                        <input type="submit" />
                    </form>
                </div>

                <div className="feed__options">
                    <div className="option">
                        <PhotoIcon style={{ color: '#70b5f9' }} />
                        <span>Photo </span>
                    </div>
                    <div className="option">
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span>Video </span>
                    </div>
                    <div className="option">
                        <EventIcon style={{ color: '#e7a33e' }} />
                        <span>Event </span>
                    </div>
                    <div className="option">
                        <AssessmentIcon style={{ color: '#fc9295' }} />
                        <span> write Article </span>
                    </div>
                </div>
            </div>
            {
                posts.map(({ id, data: { name, description, message, photoURL } }) => (
                    <Post name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL} />

                ))
            }
        </div>
    );
}

export default Feed