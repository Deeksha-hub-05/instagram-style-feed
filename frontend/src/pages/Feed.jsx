import React,{useState,useEffect} from 'react'
import axios from "axios"
export const Feed = () => {
   const [posts,setPosts] = useState([
    {
         _id:"1",
         image:"https://static.vecteezy.com/system/resources/thumbnails/023/186/184/small_2x/abstract-landscape-with-planet-and-trees-3d-render-illustration-ai-generative-image-free-photo.jpg",
         caption:"Beautiful picture",
    }
   ])
   useEffect(()=>{
   axios.get("http://localhost:3000/posts")
   .then((res)=>{
    setPosts(res.data.posts)
   })
},[])
  return (
    <section className="feed-section">
   {
    posts.length>0?(
        posts.map((post)=>(
            <div key ={post._id}  className='post-card'>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>
        ))
    ):(
        <h1>No posts available</h1>
    )}
  </section>
  );
}
export default Feed
