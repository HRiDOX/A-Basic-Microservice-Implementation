import React,{useState, useEffect} from 'react';

const CommentList = ({ comments}) => {
   /* const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);

    }

    useEffect(() => {
        fetchData();
    },[]);
*/

// previously we used these codes to get the data direclty from post service
// but now we're using query service to get all comment data
// as we don't need to depend on particular comment service 
// aste aste microservice convert hocche r ki lul!!
    const renderedComments = comments.map(comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
            
        }
        if (comment.status === 'pending') {
            content = 'The comment is waiting moderation';
            
        }
        if (comment.status === 'rejected') {
            content = 'The comment is rejected';
            
        }
        

        return <li key={comment.id}>{content}</li>
    });
  return (
   <ul>
    {renderedComments}
   </ul>
  )
}

export default CommentList
