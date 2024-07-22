import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate()
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
  
    function handleSignUp() {
      if (!email || !password) {
        setError('Email and password both are required');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(error);
        });
    }
  
    function handleSignIn() {
      if (!email || !password) {
        setError('Email and password both are required');
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          navigate('/private')
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(error);
        });
    }
  
    function handleMethodChange() {
      setIsSignUpActive(!isSignUpActive);
    }
  
    return (
      <form>
        {isSignUpActive ? <legend>Sign Up</legend> : <legend>Sign In</legend>}
        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={handleEmailChange} />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange} />
            </li>
          </ul>
          {error && <p id="error-message">{error}</p>}
          {isSignUpActive ? (
            <button type="button" onClick={handleSignUp}>Sign Up</button>
          ) : (
            <button type="button" onClick={handleSignIn}>Sign In</button>
          )}
        </fieldset>
        <a onClick={handleMethodChange}>
          {isSignUpActive ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </a>
      </form>
    );
  }
  
  export default Home;