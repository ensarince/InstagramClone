import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import { db } from '../firebase'
import Post from "./Post"

function Posts() {

  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

          //getting post data
          useEffect(() => {
            db.collection('posts')
              .get()
              .then((querySnapshot) => {
                setPosts(querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  username: doc.data().username,
                  userImg: doc.data().profileImg,
                  img: doc.data().image,
                  caption: doc.data().caption,
                })))
              }); 
          }, [db])   
  
  return (
    <div>
        {posts.map(post => (
          <Post key={post.id} 
                id={post.id} 
                username={post.username} 
                userImg = {post.userImg} 
                img={post.img} 
                caption={post.caption} 
            />
        ))}
    </div>
  )
}

export default Posts