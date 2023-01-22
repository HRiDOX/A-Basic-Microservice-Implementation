import React,{useState, useEffect} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        // previously we use this 4000 port to get post directly from post service
        // now we used to emit posts when some one created post thn query service catch these events[all other post and comments service also catch events]
        //const res = await axios.get('http://localhost:4000/posts');
        // now we will use 4002 port to get post data from query service instead of getting data directly from a particular post service
        const res = await axios.get('http://localhost:4002/posts');

        
        setPosts(res.data);
    };
    //first ei jate post fetch kora hpy that's why useEffect
    useEffect(() => {
        fetchPosts();
    },[]);

    //console.log(posts);

    const renderedPosts = Object.values(posts).map(post => {
        return <div 
        className="card"
        style={{width:'30%', marginBottom:'20px'}}
        key={post.id}

        >
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id}/>
            </div>

        </div>
    })
    return <div className="d-flex flex-row flex-wrap justify-content-between" >
        {renderedPosts}
        </div>;
};

export default PostList;