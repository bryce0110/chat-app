import { MouseEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  const loginWithUsernameAndPassword = async (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile');
    } catch (error) {
      setNotice('You entered an invalid email or password');
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
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => loginWithUsernameAndPassword(e)}
            >
              Login
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>
              Need to sign up for an account?{' '}
              <Link to="/signup">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
