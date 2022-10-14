import React, { useEffect, useState } from 'react';

function NewCommentForm({addComment, setCommentData}) {
    const [rating, setRating] = useState();
    const [content, setContent] = useState();
    const [user_id, setUser_Id] = useState();
    const [concert_id, setConcert_Id] = useState();
    const [formErrors, setFormErrors] = useState([]);


    const handleSubmit = async (e) => {
        // e.preventDefault();
    
        addComment({
          rating,
          content,
          user_id,
          concert_id
        })
      };

    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = {
    //       rating: rating,
    //       content: content,
    //       concert_id: concert_id,
    //       user_id: user_id,
    //     };
    //     console.log(JSON.stringify(formData))
    //     fetch("/comments", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }).then((r) => {
    //         console.log(r)
    //       if (r.ok) {
    //         r.json().then((newComment) => {
    //             console.log(newComment)
    //           addComment(newComment);
    //           setFormErrors([]);
    //         });
    //       } else {
    //         r.json().then((err) => setFormErrors(err.errors));
    //       }
    //     });
    //   }

    return (
        <>
      <h1 class="new-trip-form-title">Let Us Know How You Feel:</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label class="form-label" htmlFor="concert_id">
            Concert:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="concert_id"
            id="concert_id"
            value={concert_id}
            onChange={(e) => setConcert_Id(e.target.value)}
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
        <div>
        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="rating">
            Rating:
          </label>
          <br></br>
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
          <label class="form-label" htmlFor="content">
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
          Submit Comment & Rating
        </button>
        </div>
      </form>
    </>
  );
    
}

export default NewCommentForm;