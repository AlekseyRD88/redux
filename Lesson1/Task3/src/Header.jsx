import React from 'react';
import UserMenu from './UserMenu.jsx';

class Header extends React.Component {
  render() {
    return ((
      <header className="header">
        <UserMenu></UserMenu>
      </header>
    ))
  }
}

export default Header;