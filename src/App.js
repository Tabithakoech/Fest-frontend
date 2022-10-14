import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
import ConcertHomePage from "./Components/ConcertHomePage";
import Navbar from "./Components/Navbar";
import Comments from "./Components/Comments";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import ConcertCard from "./Components/ConcertCard";
// import ConcertList from "./Components/ConcertList";
import './App.css';
import Concert from "./Components/Concert";
import Home from "./Components/Home";
import CommentEditForm from "./Components/CommentEditForm";

function App() {
  const [user, setUser] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const history = useHistory();
  // const location = useLocation();
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/comments')
      .then(res => res.json())
      .then((data) => setCommentData(data))
  }, [])


  const addComment = (formData) => {
    fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newComment => {
        setCommentData(commentData.concat(newComment))
      });
  }

  const updateComment = (id, formData) => {
    fetch(`/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedComment => {
        // pessimistically update the dog in state after we get a response from the api
        setCommentData(commentData.map((comment) => (comment.id === parseInt(id) ? updatedComment : comment)));
        console.log(history)
        // history.push(`/comments`);
      });
  }

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


  if (!user) 
    return (
      <Router>
      <Navbar  />
      <Switch>
      <Route exact path="/">
          <Login onLogin={setUser} />
          <Signup onLogin={setUser} />
        </Route>
      </Switch> 
    </Router>
  ); else {

  return (

    <Router>
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route exact path="/concerts">
          <ConcertHomePage />
        </Route>
        <Route exact path="/concerts/:id">
          <Concert commentData={commentData} setCommentData={setCommentData} addComment={addComment}/>
          {/* <Comments /> */}
        </Route>  
        <Route exact path="/comments">
          <Comments commentData={commentData} setCommentData={setCommentData} addComment={addComment} />
        </Route>
        <Route    path="/comments/:id/edit"
                render={({ match }) => (
                    <CommentEditForm
                    comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}
                    updateComment={updateComment}
                  />
                )}
              /> 
      </Switch> 
    </Router>
  );
}}

export default App;
