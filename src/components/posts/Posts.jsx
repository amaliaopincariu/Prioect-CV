import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import "./Posts.css"


export default function Posts() {
  return (
    <div className="posts"> 
        <Post/>
        <Post1/>
        <Post2/>   
    </div>
  )
}
