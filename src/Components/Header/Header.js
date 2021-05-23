import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

    function Logout() {
        localStorage.clear();
        window.location.href = '/';
    }

  return (
    <header>
      <div>
        <button
          type="button"
          onClick={() => history.push('/signin')}
        >
          Log in
        </button>
          <button
              type="button"
              onClick={() => Logout()}
          >
              Log out
          </button>
      </div>
    </header>
  );
};

export default Header;