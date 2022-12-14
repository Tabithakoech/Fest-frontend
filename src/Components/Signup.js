import React, { useState } from "react";
// import { button, error, input, FormField, label, textArea } from "../styles";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
  
    <div class="sign-up-form">
      <h2 class="signup-label">If you do not have an account with us, please sign up below</h2>
      <h1 class="signup-label"> Sign-Up Here:</h1>
    <form  onSubmit={handleSubmit}>
      <formField>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </formField>
      <formField>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </formField>
      <formField>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </formField>
      <formField>
        <button class="btn btn-primary btn-block btn-large" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </formField>
        <formField>
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        </formField>
    </form>
    <div class="btm-space"></div>
    </div>
  );
}

export default Signup;
      