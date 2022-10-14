import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CommentEditForm({ comment = {}, updateComment }) {
  const [content, setContent] = useState(comment.content);
  const [rating, setRating] = useState(comment.rating);
  const [concert, setConcert] = useState(comment.concert_id);
  
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateComment(id, {
      content,
      rating,
      concert
    });
  };

  useEffect(() => {
    setContent(comment.content);
    setRating(comment.rating);
    setConcert(comment.concert_id);
  }, [comment])

  return (
    <>
    <h1 className="new-trip-form-title">Ain't Feeling The Same? Change Your Comment Below:</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label className="" htmlFor="concert_id">
            Concert:
            </label>
            <select
            type="dropdown"
            className="dropdown"
            name="concert_id"
            id="concert_id"
            value={concert}
            onChange={(e) => setConcert(e.target.value)}
            >
            <option value= "1">Bieber Fever</option>
            <option value= "2">Rock And Roll You All Nite</option>
            <option value= "3">Let's Get It On!</option>
            <option value= "4">Friends and Heroes! `Merica!</option>
            <option value= "5">Spaghetti On My Sweater Tour</option>
            <option value= "6">Eat It, Amish Paradise!</option>
            <option value= "7">Malibu's Least Wanted</option>
            <option value= "8">The Old Town Road To Montero</option>
            <option value= "9">Wahoo And Puhlease</option>
            <option value= "10">Speak Now For The Fearless, Red, 1989 Reputation World Tour</option>
            </select>
        </fieldset>

        <fieldset class="newCommentFieldset">
          <label className="" htmlFor="rating">
            Rating:
          </label>
          
          <select
            type="dropdown"
            className="dropdown"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          <option value= "1">🔥</option>
          <option value= "2">🔥🔥</option>
          <option value= "3">🔥🔥🔥</option>
          <option value= "4">🔥🔥🔥🔥</option>
          <option value= "5">🔥🔥🔥🔥🔥</option>
          </select>
        </fieldset>

        <fieldset className="newCommentFieldset">
          <label className="" htmlFor="content">
            Comment:
          </label>
          <input
            type="text"
            className="input"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </fieldset>

        <button
          class="com-btn"
          type="submit"
        >
          Update
        </button>
        
      </form>
    </>
  );
}

export default CommentEditForm;