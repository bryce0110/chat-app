import React, { MouseEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../../assets/icon.svg';
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="logo" src={icon} className="mx-auto h-10 w-auto dark" />
        <h2 className="mt-10 text-center text-2x1/9 font-bold tracking-tight text-white">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          {notice !== '' && (
            <div className="alert alert-warning text-red-500" role="alert">
              {notice}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Email Address
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white"
              >
                Password
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm/6 font-medium text-white"
              >
                Confirm Password
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Signup
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-white">
          Already have an account?{' '}
          <Link
            to="/"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Click here to login.
          </Link>
        </p>
      </div>
    </div>
    // <div className="container">
    //   <div className="row justify-content-center">
    //     <form className="col-md-4 mt-3 pt-3 pb-3">
    //       {notice !== '' && (
    //         <div className="alert alert-warning" role="alert">
    //           {notice}
    //         </div>
    //       )}
    //       <div className="form-floating mb-3">
    //         <label htmlFor="inputEmail" className="form-label">
    //           Email address
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="inputEmail"
    //             placeholder="name@example.com"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-floating mb-3">
    //         <label htmlFor="inputPassword" className="form-label">
    //           Password
    //           <input
    //             type="password"
    //             className="form-control"
    //             id="inputPassword"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-floating mb-3">
    //         <label htmlFor="inputConfirmPassword" className="form-label">
    //           Confirm Password
    //           <input
    //             type="password"
    //             className="form-control"
    //             id="inputConfirmPassword"
    //             placeholder="Confirm Password"
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //         </label>
    //       </div>
    //       <div className="d-grid">
    //         <button
    //           type="submit"
    //           className="btn btn-primary pt-3 pb-3"
    //           onClick={(e) => signupWithUsernameAndPassword(e)}
    //         >
    //           Signup
    //         </button>
    //       </div>
    //       <div className="mt-3 text-center">
    //         <span>
    //           Already have an account? <Link to="/">Click here to login.</Link>
    //         </span>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Signup;
