import React, { MouseEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notice, setNotice] = useState('');

  const signupWithUsernameAndPassword = async (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
      } catch {
        setNotice('Sorry, something went wrong. Please try again.');
      }
    } else {
      setNotice('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-4 mt-3 pt-3 pb-3">
          {notice !== '' && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          <div className="form-floating mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="inputConfirmPassword" className="form-label">
              Confirm Password
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Signup
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>
              Already have an account? <Link to="/">Click here to login.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
