import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { MouseEvent as ReactMouseEvent } from 'react';
import { auth } from './services/firebase';

function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          {user ? (
            <p>
              Welcome{' '}
              <em className="text-decoration-underline">{user.email}</em>. You
              are logged in!
            </p>
          ) : (
            <p>You are not logged in!</p>
          )}
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => logoutUser(e)}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
