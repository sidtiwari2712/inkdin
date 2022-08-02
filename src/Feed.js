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
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';




const Feed = () => {
    const user = useSelector(selectUser)
    const [posts, setPost] = useState([]);
    const [input, setInput] = useState();
    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: "This is test description",
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {

            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className="feed">
            <div className="feed__input">
                <div className="feed__form">
                    <Avatar src={user.photoURL} />
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
                posts.map((data) => {
                    return (
                        <>
                            <Post key={data.id}
                                name={data.name}
                                description={data.description}
                                message={data.message}
                                photoURL={data.photoURL} />
                        </>
                    )

                })
            }
        </div>
    );
}

export default Feed