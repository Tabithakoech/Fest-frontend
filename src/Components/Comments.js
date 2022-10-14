import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import NewCommentForm from "./NewCommentForm";

function Comments({commentData, setCommentData, addComment}) {
//   const [concert, setConcert] = useState([]);
//   const [content, setContent] = useState("");
//   const [rating, setRating] = useState("");
//   const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    // const [commentData, setCommentData] = useState([]);

    // useEffect(() => {
    //     fetch('/comments')
    //       .then(res => res.json())
    //       .then((data) => setCommentData(data))
    //   }, [])

      // useEffect(() => {
      //   fetch(`/episodes/${id}`).then((r) => {
      //     if (r.ok) {
      //       r.json().then((episode) =>
      //         setEpisode({ data: episode, error: null, status: "resolved" })
      //       );
      //     } else {
      //       r.json().then((err) =>
      //         setEpisode({ data: null, error: err.error, status: "rejected" })
      //       );
      //     }
      //   });
      // }, [id]);

    // const addComment = (formData) => {
    //   console.log(JSON.stringify(formData))
    //     fetch('/comments', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //       },
    //       body: JSON.stringify(formData)
    //     })
    //       .then(res => res.json())
    //       .then(newComment => {
    //         setCommentData(commentData.concat(newComment))
    //       });
    //   }

    // function addComment(newComment) {
    //   setEpisode({
    //     data: {
    //       ...episode,
    //       guests: [...episode.guests, newComment],
    //     },
    //     error: null,
    //     status: "resolved",
    //   });
    // }
    
      // const updateComment = (id, formData) => {
      //   fetch(`/comments/${id}`, {
      //     method: 'PATCH',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Accept: 'application/json'
      //     },
      //     body: JSON.stringify(formData)
      //   })
      //     .then(res => res.json())
      //     .then(updatedComment => {
      //       // pessimistically update the dog in state after we get a response from the api
      //       setCommentData(commentData.map((comment) => (comment.id === parseInt(id) ? updatedComment : comment)));
      //       history.push(`/comments`);
      //     });
      // }
    
      // const deleteComment = (comment_id) => {
      //     // optimistically update the ui
      //     setCommentData(commentData.filter(comment => comment.id !== parseInt(comment_id)))
      //     // update the API
      //     fetch(`/comments/${comment_id}`, {
      //       method: 'DELETE',
      //       headers: { Accept: 'application/json' }
      //     })
      //       .then(res => res.json())
      //       .then(deletedComment => {
      //         console.log('deleted', deletedComment.comment_id)
      //         if (location.pathname !== "/comments") {
      //           history.push("/comments")
      //           window.location.reload()
      //         }
      //       });
      // }

      function deleteComment(id) {
        fetch(`/comments/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setCommentData((commentData) =>
            commentData.filter((commentData) => commentData.id !== id)
            );
          }
        });
      }
    

//   useEffect(() => {
//     fetch("/concerts")
//       .then((r) => r.json())
//       .then(setConcert);
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       concert_id: concertId,
//       rating: rating,
//       content: content,
//     };
//     fetch("/comments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((newContent) => {
//           onAddContent(newContent);
//           setFormErrors([]);
//         });
//       } else {
//         r.json().then((err) => setFormErrors(err.errors));
//       }
//     });
//   }

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="concert_id">Pizza:</label>
    //   <select>
    //     id="concert_id"
    //     name="concert_id"
    //     value={concertId}
    //     onChange={(e) => setConcertId(e.target.value)}
    // </select>
    //   <button type="submit">Share your thoughts</button>
    // </form>
    <>
    <div>
      <NewCommentForm addComment={addComment} setCommentData={setCommentData} comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}/>
    </div>
    <div>
        {commentData.map((comment) => <CommentsCard comment={commentData} id={comment.id} content={comment.content} rating={comment.rating} username={comment.user.username} concert={comment.concert.name} deleteComment={deleteComment} />)}
    </div>
    </>
  );
}

export default Comments;