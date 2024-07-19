import React from 'react';
import classes from './Navbar.module.css';

function NavBar() {
  const linkList = [
    { name: 'Mission', page: '#mission' },
    { name: 'About', page: '#about' },
    { name: 'Featured Students', page: '#featured' },
    { name: 'Contact', page: '#contact' },
  ];

  return (
    <div className={classes.navbar}>
      <div className={classes.all_links}>
        <div className={classes.left_nav}>
          <a className={classes.link} href="login">
            Login
          </a>
          {linkList.map(link => (
            <a key={link.name} className={classes.link} href={link.page}>
              {link.name}
            </a>
          ))}
        </div>
        <div className={classes.right_nav}>
          <a className={classes.link} href="login">
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
