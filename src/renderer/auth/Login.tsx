import { MouseEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../../assets/icon.svg';
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="logo" src={icon} className="mx-auto h-10 w-auto dark" />
        <h2 className="mt-10 text-center text-2x1/9 font-bold tracking-tight text-white">
          Sign in to your account
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => loginWithUsernameAndPassword(e)}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-white">
          Need to sign up for an account?{' '}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Click here.
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
    //       <div className="d-grid">
    //         <button
    //           type="submit"
    //           className="btn btn-primary pt-3 pb-3"
    //           onClick={(e) => loginWithUsernameAndPassword(e)}
    //         >
    //           Login
    //         </button>
    //       </div>
    //       <div className="mt-3 text-center">
    //         <span>
    //           Need to sign up for an account?{' '}
    //           <Link to="/signup">Click here.</Link>
    //         </span>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
